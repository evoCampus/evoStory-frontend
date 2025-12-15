import { Handle, Position } from "@xyflow/react";
import { useFlow } from "../FlowContext";
import type { NodeProps } from "@xyflow/react";
import type { SceneNodeType } from "../types";

export default function SceneNode({ id, data }: NodeProps<SceneNodeType>) {
  const { updateNode, startSceneId, endSceneIds, deleteNode } = useFlow();
  const isEnd = endSceneIds.includes(id);

  const ringWrapperClass = startSceneId === id
    ? "ring-4 ring-success/30 ring-offset-4 ring-offset-base-100 rounded-xl"
    : isEnd
      ? "ring-4 ring-warning/30 ring-offset-4 ring-offset-base-100 rounded-xl"
      : "ring-2 ring-info/20 ring-offset-2 ring-offset-base-100 rounded-xl";

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
        className="btn btn-ghost btn-sm btn-circle absolute top-4 right-4 z-20"
      >
        ✕
      </button>
      <div className="card border border-base-300 rounded-xl shadow-md w-64 overflow-hidden">
        <div className="card-body p-4 bg-base-100 text-base-content">

          <input
            type="text"
            value={data.title}
            onChange={(e) => updateNode(id, { title: e.target.value })}
            placeholder="Scene title..."
            className="input input-bordered input-sm w-full mb-2"
          />

          <textarea
            value={data.text}
            onChange={(e) => updateNode(id, { text: e.target.value })}
            placeholder="Scene text..."
            rows={4}
            className="textarea textarea-bordered w-full resize-none"
          />

          <div className="card-actions justify-end mt-2">
          </div>
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