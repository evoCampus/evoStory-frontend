import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import {
  useNodesState,
  useEdgesState,
  addEdge,
  type OnConnect,
} from "@xyflow/react";
import type { FlowNode, FlowEdge, FlowContextType } from "./types";
import { causesCycle } from "./helper";

const FlowContext = createContext<FlowContextType | undefined>(undefined);

export const FlowProvider = ({ children }: { children: ReactNode }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState<FlowNode>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<FlowEdge>([]);
  const [startSceneId, setStartSceneId] = useState<string | null>(null);
  const [endSceneIds, setEndSceneIds] = useState<string[]>([]);

  const [title, setTitle] = useState<string>("Untitled Story");

  useEffect(() => {
    const sceneNodeIds = nodes.filter((n) => n.type === "sceneNode").map((n) => n.id);
    const allNodeIds = nodes.map((n) => n.id);

    if (startSceneId && !sceneNodeIds.includes(startSceneId)) {
      setStartSceneId(null);
    }

    setEndSceneIds((prev) => prev.filter((id) => sceneNodeIds.includes(id)));

    setEdges((eds) => eds.filter((e) => allNodeIds.includes(e.source) && allNodeIds.includes(e.target)));
  }, [nodes, startSceneId, setStartSceneId, setEndSceneIds, setEdges]);

  const updateNode = (
    id: string,
    newData: Record<string, any>
  ) => {
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
      })
    );
  };

  const onConnect: OnConnect = (connection) => {
    const source = nodes.find((n) => n.id === connection.source);
    const target = nodes.find((n) => n.id === connection.target);

    if (!source || !target) return;

    if (source.type === "decisionNode") {
      const parentEdge = edges.find((e) => e.target === source.id);
      if (parentEdge && parentEdge.source === target.id) {
        alert("These nodes are already connected!");
        return;
      }
    }

    if (causesCycle(connection.source, connection.target, edges)) {
      alert("This connection would create a cycle!");
      return;
    }

    const isValid =
      (source.type === "sceneNode" && target.type === "decisionNode") ||
      (source.type === "decisionNode" && target.type === "sceneNode");

    if (!isValid) {
      alert("Only Scene - Decision connections are allowed!");
      return;
    }

    setEdges((eds) => addEdge({ ...connection, animated: false }, eds));
  };

  const exportToJson = () => {

    let sceneCounter = 1;
    const sceneMap = new Map<string, string>();


    const decisionNodes = nodes.filter((n) => n.type === "decisionNode");
    const danglingDecisions = decisionNodes.filter((d) => {
      const outgoing = edges.find((e) => e.source === d.id && nodes.find((n) => n.id === e.target && n.type === "sceneNode"));
      return !outgoing;
    });

    if (danglingDecisions.length > 0) {
      alert(
        "There are decision nodes that don't lead to any scene. Fix or remove them before exporting.\n\n" +
          danglingDecisions.map((d) => ` - ${d.data.choiceText ?? d.id} (${d.id})`).join("\n"),
      );
      return;
    }
    nodes
      .filter((n) => n.type === "sceneNode")
      .forEach((scene) => {
        sceneMap.set(scene.id, String(sceneCounter++));
      });

    const sceneNodes = nodes.filter((n) => n.type === "sceneNode");

    const Scenes = sceneNodes
      .map((scene) => {
        const SceneId = sceneMap.get(scene.id)!;
        const Content = { Text: scene.data.text || "" };

        const outgoingDecisions = edges
          .filter((e) => e.source === scene.id)
          .map((edge) => nodes.find((n) => n.id === edge.target))
          .filter((n) => n?.type === "decisionNode");

        const Choices =
          outgoingDecisions.length > 0
            ? outgoingDecisions.map((decNode) => {
              const outgoing = edges.find((e) => e.source === decNode!.id);

              const nextScene = outgoing
                ? sceneMap.get(outgoing.target!) ?? null
                : null;

              return {
                ChoiceText: decNode!.data.choiceText || "Choice",
                NextSceneId: nextScene,
              };
            })
            : null;

        return { SceneId, Content, Choices };
      });

    if (!startSceneId) {
      alert("Please select a START scene before exporting!");
      return;
    }

    if (endSceneIds.length === 0) {
      alert("Please mark at least one ENDING scene!");
      return;
    }

    const unconnectedScenes = Scenes.filter((sc, index) => {
      const hasChoices = sc.Choices && sc.Choices.some((c: any) => c.NextSceneId !== null);
      const isEnding = endSceneIds.includes(sceneNodes[index].id);
      return !hasChoices && !isEnding;
    });

    if (unconnectedScenes.length > 0) {
      alert("Some scenes have no choices and are not marked as ending scenes!\n\n");
      return;
    }

    const storyData = {
      Title: title,
      Scenes,
      StartingSceneId: startSceneId ? sceneMap.get(startSceneId) : Scenes[0]?.SceneId ?? "1",
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

    const finalNodes = newNodes.filter((n) => !orphanedDecisionIds.includes(n.id));
    const finalEdges = newEdges.filter((e) => !orphanedDecisionIds.includes(e.source) && !orphanedDecisionIds.includes(e.target));

    setNodes(finalNodes);
    setEdges(finalEdges);

    if (startSceneId === id) setStartSceneId(null);
    setEndSceneIds((prev) => prev.filter((nid) => nid !== id));
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
        exportToJson
      }}
    >
      {children}
    </FlowContext.Provider>
  );
};

export const useFlow = () => {
  const ctx = useContext(FlowContext);
  if (!ctx) throw new Error("useFlow must be used within a FlowProvider");
  return ctx;
};