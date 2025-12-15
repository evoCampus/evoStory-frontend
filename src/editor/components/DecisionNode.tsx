import { Handle, Position } from "@xyflow/react";
import { useFlow } from "../FlowContext";
import type { NodeProps } from "@xyflow/react";
import type { DecisionNodeType } from "../types";

export default function DecisionNode({ id, data }: NodeProps<DecisionNodeType>) {
  const { updateNode, deleteNode } = useFlow();

  const ringWrapperClass = "ring-4 ring-secondary/30 ring-offset-4 ring-offset-base-100 rounded-xl";

  return (
    <div className={`${ringWrapperClass} transition-all duration-300 ease-in-out relative inline-block`}>
      <button
        aria-label="Delete node"
        title="Delete node"
        onClick={() => {
          if (confirm("Delete this node? This will also remove attached edges.")) {
            deleteNode(id);
          }
        }}
        className="btn btn-ghost btn-sm btn-circle absolute top-2 right-2 z-20"
      >
        ✕
      </button>
      <div className="card border border-base-300 rounded-xl shadow-md w-56 overflow-hidden">
        <div className="card-body p-4 bg-base-100 text-base-content">
          <label className="label p-0 mb-1 text-sm font-semibold">Decision</label>
          <input
            type="text"
            value={data.choiceText}
            onChange={(e) => updateNode(id, { choiceText: e.target.value })}
            placeholder="Enter choice..."
            className="input input-bordered input-sm w-full"
          />

          <div className="card-actions justify-end mt-2" />
        </div>
      </div>
      <Handle
        type="target"
        position={Position.Top}
        className="absolute"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="absolute"
      />
    </div>
  );
}