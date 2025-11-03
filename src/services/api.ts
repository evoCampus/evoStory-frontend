import type { SceneData, Hotspot } from '../types/scene';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

export async function fetchSceneData(): Promise<SceneData> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/scene`);
    if (!response.ok) {
      throw new Error('Failed to fetch scene data');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching scene data:', error);
    return {
      backgroundUrl: '/background.jpg',
      hotspots: []
    };
  }
}
export async function fetchHotspotsFromSVG(scene?: string): Promise<Hotspot[]> {
  try {
    const res = await fetch('/hotspots.svg');
    if (!res.ok) throw new Error('Failed to fetch hotspots.svg');
    const text = await res.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'image/svg+xml');

    const elements = Array.from(doc.querySelectorAll<SVGElement>('.hotspot'));

    const hotspots: Hotspot[] = elements
      .filter((el) => {
        if (!scene) return true;
        const ds = el.getAttribute('data-scene');
        return !ds || ds === scene;
      })
      .map((el) => {
        const id = el.getAttribute('id') || '';
        const label = el.getAttribute('data-label') || '';
        if (el.tagName.toLowerCase() === 'path') {
          return {
            id,
            type: 'path',
            label,
            attributes: {
              d: el.getAttribute('d') || ''
            }
          } as Hotspot;
        }

        if (el.tagName.toLowerCase() === 'rect') {
          return {
            id,
            type: 'rect',
            label,
            attributes: {
              x: Number(el.getAttribute('x') ?? 0),
              y: Number(el.getAttribute('y') ?? 0),
              width: Number(el.getAttribute('width') ?? 0),
              height: Number(el.getAttribute('height') ?? 0),
              rx: el.getAttribute('rx') ? Number(el.getAttribute('rx')) : undefined,
              ry: el.getAttribute('ry') ? Number(el.getAttribute('ry')) : undefined
            }
          } as Hotspot;
        }

        // default
        return {
          id,
          type: 'path',
          label,
          attributes: { d: (el.getAttribute('d') || '') }
        } as Hotspot;
      });

    return hotspots;
  } catch (err) {
    console.error('Error parsing hotspots.svg', err);
    return [];
  }
}