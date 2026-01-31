import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import {
  useNodesState,
  useEdgesState,
  addEdge,
  type OnConnect,
} from "@xyflow/react";
import { v4 as uuidv4 } from "uuid";
import ELK from "elkjs/lib/elk.bundled.js";
import type { FlowNode, FlowEdge, FlowContextType } from "./types";
import { causesCycle } from "./helper";
import Modal from "../components/Modal";

const elk = new ELK();
const FlowContext = createContext<FlowContextType | undefined>(undefined);

export const FlowProvider = ({ children }: { children: ReactNode }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState<FlowNode>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<FlowEdge>([]);
  const [startSceneId, setStartSceneId] = useState<string | null>(null);
  const [endSceneIds, setEndSceneIds] = useState<string[]>([]);

  const [title, setTitle] = useState<string>("Untitled Story");

  const [alertOpen, setAlertOpen] = useState(false);
  const [alertTitle, setAlertTitle] = useState<string>("");
  const [alertContent, setAlertContent] = useState<string>("");
  const [alertIsSuccess, setAlertIsSuccess] = useState<boolean>(false);

  const showAlert = (title: string, content: string, isSuccess = false) => {
    setAlertTitle(title);
    setAlertContent(content);
    setAlertIsSuccess(isSuccess);
    setAlertOpen(true);
  };

  const relayout = async (nodesParam?: FlowNode[], edgesParam?: FlowEdge[]) => {
    const layoutNodes = nodesParam ?? nodes;
    const layoutEdges = edgesParam ?? edges;

    if (!layoutNodes.length) return;  

    const elkGraph = {
      id: "root",
      layoutOptions: {
        "elk.algorithm": "layered",
        "elk.direction": "DOWN",
        "elk.spacing.nodeNode": "50",
        "elk.layered.spacing.nodeNodeBetweenLayers": "150",
        "elk.edgeRouting": "ORTHOGONAL",
        "elk.layered.nodePlacement.strategy": "NETWORK_SIMPLEX",
        "elk.padding": "[top=50,left=50,bottom=50,right=50]",
      },
      children: layoutNodes.map((n) => ({
        id: n.id,
        width: 280,
        height: n.type === "sceneNode" ? 150 : 80,
      })),
      edges: layoutEdges.map((e) => ({
        id: e.id,
        sources: [e.source],
        targets: [e.target],
      })),
    };

    const layout = await elk.layout(elkGraph);

    const positionedNodes = layoutNodes.map((n) => {
      const elkNode = layout.children?.find((c) => c.id === n.id);
      if (!elkNode) return n;

      return {
        ...n,
        position: {
          x: elkNode.x ?? 0,
          y: elkNode.y ?? 0,
        },
      };
    });

    setNodes(positionedNodes);
    if (edgesParam) setEdges(layoutEdges);
  };

  useEffect(() => {
    const sceneNodeIds = nodes
      .filter((n) => n.type === "sceneNode")
      .map((n) => n.id);
    const allNodeIds = nodes.map((n) => n.id);

    if (startSceneId && !sceneNodeIds.includes(startSceneId)) {
      setStartSceneId(null);
    }

    setEndSceneIds((prev) => prev.filter((id) => sceneNodeIds.includes(id)));

    setEdges((eds) =>
      eds.filter(
        (e) => allNodeIds.includes(e.source) && allNodeIds.includes(e.target),
      ),
    );
  }, [nodes, startSceneId, setStartSceneId, setEndSceneIds, setEdges]);

  const updateNode = (id: string, newData: Record<string, any>) => {
    setNodes((nds) =>
      nds.map((n) => {
        if (n.id !== id) return n;

        if (n.type === "sceneNode") {
          return {
            ...n,
            data: {
              ...n.data,
              sceneId: n.data.sceneId,
              title: n.data.title,
              text: n.data.text,
              ...newData,
            },
          };
        }

        if (n.type === "decisionNode") {
          return {
            ...n,
            data: {
              ...n.data,
              choiceText: n.data.choiceText,
              nextSceneId: n.data.nextSceneId,
              ...newData,
            },
          };
        }

        return n;
      }),
    );
  };

  const onConnect: OnConnect = (connection) => {
    const nodeMap = new Map(nodes.map((n) => [n.id, n]));

    const source = nodeMap.get(connection.source);
    const target = nodeMap.get(connection.target);

    if (!source || !target) return;

    if (source.type === "decisionNode") {
      const parentEdge = edges.find((e) => e.target === source.id);
      if (parentEdge && parentEdge.source === target.id) {
        showAlert("Connection error", "These nodes are already connected!");
        return;
      }
    }

    if (causesCycle(connection.source, connection.target, edges)) {
      showAlert("Connection error", "This connection would create a cycle!");
      return;
    }

    const isValid =
      (source.type === "sceneNode" && target.type === "decisionNode") ||
      (source.type === "decisionNode" && target.type === "sceneNode");

    if (!isValid) {
      showAlert(
        "Connection error",
        "Only Scene - Decision connections are allowed!",
      );
      return;
    }

    setEdges((eds) => addEdge({ ...connection, animated: false }, eds));
  };

  const exportToJson = () => {
    let sceneCounter = 1;
    const sceneMap = new Map<string, string>();

    const decisionNodes = nodes.filter((n) => n.type === "decisionNode");
    const danglingDecisions = decisionNodes.filter((d) => {
      const outgoing = edges.find(
        (e) =>
          e.source === d.id &&
          nodes.find((n) => n.id === e.target && n.type === "sceneNode"),
      );
      return !outgoing;
    });

    if (danglingDecisions.length > 0) {
      showAlert(
        "Connection error",
        "There are decision nodes that don't lead to any scene. Fix or remove them before exporting.",
      );
      return;
    }
    nodes
      .filter((n) => n.type === "sceneNode")
      .forEach((scene) => {
        sceneMap.set(scene.id, String(sceneCounter++));
      });

    const sceneNodes = nodes.filter((n) => n.type === "sceneNode");

    const Scenes = sceneNodes.map((scene) => {
      const SceneId = parseInt(sceneMap.get(scene.id)!, 10);
      const Content = { Text: scene.data.text || "" };

      const outgoingDecisions = edges
        .filter((e) => e.source === scene.id)
        .map((edge) => nodes.find((n) => n.id === edge.target))
        .filter((n) => n?.type === "decisionNode");

      const Choices =
        outgoingDecisions.length > 0
          ? outgoingDecisions.flatMap((decNode) => {
              const outgoing = edges.filter((e) => e.source === decNode!.id);

              return outgoing.map((edge) => {
                const nextScene = parseInt(sceneMap.get(edge.target!) ?? "0", 10);

              return {
                ChoiceText: decNode!.data.choiceText || "Choice",
                NextSceneId: nextScene,
              };
            });
          })
          : null;

      return { SceneId, Content, Choices };
    });

    if (!startSceneId) {
      showAlert(
        "Export error",
        "Please select a START scene before exporting!",
      );
      return;
    }

    if (endSceneIds.length === 0) {
      showAlert("Export error", "Please mark at least one ENDING scene!");
      return;
    }

    const unconnectedScenes = Scenes.filter((sc, index) => {
      const hasChoices =
        sc.Choices && sc.Choices.some((c: any) => c.NextSceneId !== null);
      const isEnding = endSceneIds.includes(sceneNodes[index].id);
      return !hasChoices && !isEnding;
    });

    if (unconnectedScenes.length > 0) {
      showAlert(
        "Export error",
        "Some scenes have no choices and are not marked as ending scenes!",
      );
      return;
    }

    const storyData = {
      Title: title,
      Scenes,
      StartingSceneId: startSceneId
        ? parseInt(sceneMap.get(startSceneId)!, 10)
        : (Scenes[0]?.SceneId ?? 1),
    };

    const blob = new Blob([JSON.stringify(storyData, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${title.replace(/\s+/g, "_")}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const deleteNode = (id: string) => {
    setNodes((nds) => nds.filter((n) => n.id !== id));
    setEdges((eds) => eds.filter((e) => e.source !== id && e.target !== id));
    if (startSceneId === id) setStartSceneId(null);
    setEndSceneIds((prev) => prev.filter((nid) => nid !== id));

    const newEdges = edges.filter((e) => e.source !== id && e.target !== id);
    const newNodes = nodes.filter((n) => n.id !== id);

    const orphanedDecisionIds = newNodes
      .filter((n) => n.type === "decisionNode")
      .filter((dec) => !newEdges.some((e) => e.target === dec.id))
      .map((d) => d.id);

    const finalNodes = newNodes.filter(
      (n) => !orphanedDecisionIds.includes(n.id),
    );
    const finalEdges = newEdges.filter(
      (e) =>
        !orphanedDecisionIds.includes(e.source) &&
        !orphanedDecisionIds.includes(e.target),
    );

    setNodes(finalNodes);
    setEdges(finalEdges);

    if (startSceneId === id) setStartSceneId(null);
    setEndSceneIds((prev) => prev.filter((nid) => nid !== id));
  };

  const importFromJson = (file: File) => {
    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const content = e.target?.result as string;
        const storyData = JSON.parse(content);

        if (!storyData.Scenes || !Array.isArray(storyData.Scenes)) {
          showAlert(
            "Import error",
            "Invalid JSON format: Scenes array is missing!",
          );
          return;
        }

        if (storyData.Scenes.length === 0) {
          showAlert("Import error", "The story must have at least one scene!");
          return;
        }

        const sceneIdToNodeId = new Map<number, string>();
        const importedNodes: FlowNode[] = [];
        let startSceneNodeId: string | null = null;

        storyData.Scenes.forEach((scene: any, index: number) => {
          const nodeId = uuidv4();
          const sceneId = scene.SceneId;
          sceneIdToNodeId.set(sceneId, nodeId);

          const isStartScene = sceneId === storyData.StartingSceneId;

          importedNodes.push({
            id: nodeId,
            type: "sceneNode",
            position: { x: 100 + index * 150, y: 100 + (index % 3) * 200 },
            data: {
              sceneId: nodeId,
              title: scene.Content?.title || `Scene ${sceneId}`,
              text: scene.Content?.Text || "",
            },
          });

          if (isStartScene) {
            startSceneNodeId = nodeId;
          }
        });

        const importedEdges: FlowEdge[] = [];
        let decisionCounter = 0;

        storyData.Scenes.forEach((scene: any) => {
          const sceneNodeId = sceneIdToNodeId.get(scene.SceneId);
          if (!sceneNodeId) return;

          if (scene.Choices && Array.isArray(scene.Choices)) {
            scene.Choices.forEach((choice: any) => {
              const decisionNodeId = uuidv4();
              const nextSceneNodeId = sceneIdToNodeId.get(choice.NextSceneId);

              importedNodes.push({
                id: decisionNodeId,
                type: "decisionNode",
                position: {
                  x: 100 + decisionCounter * 150,
                  y: 350 + (decisionCounter % 3) * 150,
                },
                data: { choiceText: choice.ChoiceText || "Choice" },
              });

              importedEdges.push({
                id: `${sceneNodeId}-${decisionNodeId}`,
                source: sceneNodeId,
                target: decisionNodeId,
                animated: false,
              });

              if (nextSceneNodeId) {
                importedEdges.push({
                  id: `${decisionNodeId}-${nextSceneNodeId}`,
                  source: decisionNodeId,
                  target: nextSceneNodeId,
                  animated: false,
                });
              }

              decisionCounter++;
            });
          }
        });

        if (storyData.Title) {
          setTitle(storyData.Title);
        }

        if (!startSceneNodeId) {
          showAlert("Import error", "Starting scene not found!");
          return;
        }
        
        await relayout(importedNodes, importedEdges);

        if (startSceneNodeId) {
          setStartSceneId(startSceneNodeId);
        }

        const endScenes = storyData.Scenes.filter(
          (scene: any) => !scene.Choices || scene.Choices.length === 0,
        ).map((scene: any) => sceneIdToNodeId.get(scene.SceneId));

        setEndSceneIds(
          endScenes.filter((id: string | undefined) => id !== undefined),
        );

        showAlert(
          "Import successful",
          `Story imported successfully!\n${importedNodes.filter((n) => n.type === "sceneNode").length} scenes and ${importedNodes.filter((n) => n.type === "decisionNode").length} choices loaded.`,
          true,
        );
      } catch (error) {
        showAlert(
          "Import error",
          `Failed to parse JSON file: ${error instanceof Error ? error.message : "Unknown error"}`,
        );
      }
    };
    reader.readAsText(file);
  };

  return (
    <FlowContext.Provider
      value={{
        nodes,
        setNodes,
        onNodesChange,
        edges,
        setEdges,
        onEdgesChange,
        onConnect,
        updateNode,
        deleteNode,
        title,
        setTitle,
        startSceneId,
        setStartSceneId,
        endSceneIds,
        setEndSceneIds,
        exportToJson,
        importFromJson,
        relayout,
      }}
    >
      {children}

      <Modal
        isOpen={alertOpen}
        onClose={() => setAlertOpen(false)}
        title={alertTitle}
        showConfirmButton={true}
        showCancelButton={false}
        confirmText="OK"
        onConfirm={() => setAlertOpen(false)}
        modalClassName={
          alertIsSuccess
            ? "border-t-4 border-green-500"
            : "border-t-4 border-red-500"
        }
      >
        <div className="whitespace-pre-wrap text-gray-200">{alertContent}</div>
      </Modal>
    </FlowContext.Provider>
  );
};

export const useFlow = () => {
  const ctx = useContext(FlowContext);
  if (!ctx) throw new Error("useFlow must be used within a FlowProvider");
  return ctx;
};
