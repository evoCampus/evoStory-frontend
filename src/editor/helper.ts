import type { Edge } from "@xyflow/react";

export function causesCycle(
  sourceId: string,
  targetId: string,
  edges: Edge[],
  visited: Set<string> = new Set()
): boolean {
  if (targetId === sourceId) return true;
  if (visited.has(targetId)) return false;

  visited.add(targetId);

  const outgoingEdges = edges.filter(edge => edge.source === targetId);

  return outgoingEdges.some(edge =>
    causesCycle(sourceId, edge.target, edges, visited)
  );
}