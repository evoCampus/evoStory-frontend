import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import type { SceneData, Hotspot } from "./types/scene";
import { fetchSceneData, fetchHotspotsFromSVG } from "./services/api";

export default function App() {
  const [log, setLog] = useState<string>("Betöltés...");
  const [sceneData, setSceneData] = useState<SceneData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);

  const handleClick = (e: React.MouseEvent<SVGSVGElement>) => {
    const target = (e.target as SVGElement).closest(".hotspot");
    if (!target) return;
    const id = target.getAttribute("id");
    const hotspot = sceneData?.hotspots.find((h) => h.id === id);
    if (hotspot) setLog(hotspot.label);
  };

  useEffect(() => {
    const loadSceneData = async () => {
      try {
        const meta = await fetchSceneData();
        const hotspots = await fetchHotspotsFromSVG((meta as any).id || undefined);
        setSceneData({ backgroundUrl: meta.backgroundUrl, hotspots });
        setLog("Kattints egy elemre.");
      } catch (err) {
        setError("Hiba történt a betöltés során.");
        console.error(err);
      }
    };

    loadSceneData();
  }, []);

  if (error) {
    return (
      <div className="flex items-center justify-center w-full h-full bg-gray-900 text-white">
        <p className="text-xl">{error}</p>
      </div>
    );
  }

  if (!sceneData) {
    return (
      <div className="flex items-center justify-center w-full h-full bg-gray-900 text-white">
        <p className="text-xl">Betöltés...</p>
      </div>
    );
  }

  const renderHotspot = (hotspot: Hotspot) => {
    const { id, type, label, attributes } = hotspot;
    const shapeClass = "hover:fill-white/10 cursor-pointer";

    return (
      <g key={id} id={id} className="hotspot hover:cursor-pointer" data-label={label}>
        {type === 'path' ? (
          <path className={shapeClass} {...attributes} />
        ) : (
          <rect className={shapeClass} {...attributes} />
        )}
      </g>
    );
  };

  return (
    <div className="relative w-full h-full">
      <img 
        src={sceneData.backgroundUrl} 
        alt="" 
        className="absolute top-0 left-0 w-full h-full object-cover" 
      />
      <svg 
        ref={svgRef}
        className="absolute top-0 left-0 w-full h-full fill-transparent"
        viewBox="0 0 1920 1080"
        onClick={handleClick}
      >
        {sceneData.hotspots.map(renderHotspot)}
      </svg>

      {/* log */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 px-6 py-3 border border-2 bg-black/60 text-white rounded-lg backdrop-blur-md">
        {log}
      </div>
    </div>
  );
}