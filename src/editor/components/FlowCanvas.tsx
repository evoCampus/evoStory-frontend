import {
  ReactFlow,
  Background,
  BackgroundVariant
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { useFlow } from "../FlowContext";
import SceneNode from "../components/SceneNode";
import DecisionNode from "../components/DecisionNode";
import Sidebar from "../components/Sidebar";
import { JSX } from "react";

const nodeTypes = {
  sceneNode: SceneNode,
  decisionNode: DecisionNode,
};

export default function FlowCanvas(): JSX.Element {
  const {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
  } = useFlow();

  return (
    <div className="flex h-screen w-screen">
      <Sidebar />
      <div className="flex-1">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
          className="bg-base-100"
        >
          <Background gap={12} size={1} variant={BackgroundVariant.Dots} />
        </ReactFlow>
      </div>
    </div>
  );
}