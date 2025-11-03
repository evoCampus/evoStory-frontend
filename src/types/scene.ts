export interface Hotspot {
  id: string;
  type: 'path' | 'rect';
  label: string;
  attributes: {
    [key: string]: string | number;
  };
}

export interface SceneData {
  backgroundUrl: string;
  hotspots: Hotspot[];
}