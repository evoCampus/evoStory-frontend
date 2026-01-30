import type { Node, Edge, OnNodesChange, OnEdgesChange, OnConnect } from "@xyflow/react";

export type SceneData = {
  title?: string;
  text: string;
  sceneId?: string;
}

export type DecisionData = {
  choiceText: string
  nextSceneId?: string;
};

export interface FlowContextType {
  nodes: FlowNode[];
  setNodes: React.Dispatch<React.SetStateAction<FlowNode[]>>;
  onNodesChange: OnNodesChange<FlowNode>;

  edges: FlowEdge[];
  setEdges: React.Dispatch<React.SetStateAction<FlowEdge[]>>;
  onEdgesChange: OnEdgesChange<FlowEdge>;

  title: string,
  setTitle: React.Dispatch<React.SetStateAction<string>>;

  startSceneId: string | null,
  setStartSceneId: React.Dispatch<React.SetStateAction<string|null>>;

  endSceneIds: string[],
  setEndSceneIds: React.Dispatch<React.SetStateAction<string[]>>;

  onConnect: OnConnect;
  updateNode: (id: string, newData: any) => void;
  deleteNode: (id: string) => void;

  exportToJson: () => void;
  importFromJson: (file: File) => void;
  relayout: (nodes?: FlowNode[], edges?: FlowEdge[]) => Promise<void>;
}

export type SceneNodeType = Node<SceneData, 'sceneNode'>;
export type DecisionNodeType = Node<DecisionData, 'decisionNode'>;

export type FlowNode = SceneNodeType | DecisionNodeType;
export type FlowEdge = Edge;