import type { Edge } from "@xyflow/react";

export function causesCycle(sourceId: string, targetId: string, edges: Edge[]) {
  const visited = new Set<string>();

  function dfs(nodeId: string): boolean {
    if (nodeId === sourceId) return true;
    if (visited.has(nodeId)) return false;
    visited.add(nodeId);

    const outgoing = edges.filter(e => e.source === nodeId);
    return outgoing.some(e => dfs(e.target));
  }

  return dfs(targetId);
}