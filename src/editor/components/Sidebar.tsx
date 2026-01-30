import { useNavigate } from "react-router";
import { useFlow } from "../FlowContext";
import { v4 as uuidv4 } from "uuid";

export default function Sidebar() {
  const { title, setTitle, setNodes, exportToJson, importFromJson, startSceneId, setStartSceneId, setEndSceneIds, relayout } = useFlow();
  const navigate = useNavigate();

  const addSceneNode = () => {
    const nid = uuidv4();
    setNodes((nds) => [
      ...nds,
      {
        id: nid,
        type: "sceneNode",
        position: { x: Math.random() * 400 + 200, y: Math.random() * 300 },
        data: {
          sceneId: nid,
          title: "New Scene",
          text: "",
        },
      },
    ]);
  };

  const addStartSceneNode = () => {
    if (startSceneId) {
      alert("A start scene node already exists. Only one start scene is allowed.");
      return;
    }
    const nid = uuidv4();
    setNodes((nds) => [
      ...nds,
      {
        id: nid,
        type: "sceneNode",
        position: { x: Math.random() * 400 + 200, y: Math.random() * 300 },
        data: {
          sceneId: nid,
          title: "Start Scene",
          text: "",
        },
      },
    ]);
    setStartSceneId(nid);
  };

  const addEndSceneNode = () => {
    const nid = uuidv4();
    setNodes((nds) => [
      ...nds,
      {
        id: nid,
        type: "sceneNode",
        position: { x: Math.random() * 400 + 200, y: Math.random() * 300 },
        data: {
          sceneId: nid,
          title: "End Scene",
          text: "",
        },
      },
    ]);
    setEndSceneIds((prev) => [...prev, nid]);
  };

  const addDecisionNode = () => {
    setNodes((nds) => [
      ...nds,
      {
        id: uuidv4(),
        type: "decisionNode",
        position: { x: Math.random() * 400 + 200, y: Math.random() * 300 },
        data: { choiceText: "New choice" },
      },
    ]);
  };

  const handleNavigateBack = () => {
    navigate("/");
  };

  const handleImportClick = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        importFromJson(file);
      }
    };
    input.click();
  };

  return (
    <aside className="w-64 h-screen bg-base-200 border-r border-base-300 p-4 flex flex-col gap-4">

      <h2 className="text-lg font-bold mb-1">Story Settings</h2>

      <label className="label p-0 text-sm font-semibold">Story Title</label>
      <input
        type="text"
        className="input input-bordered input-sm w-full"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter story title..."
      />

      <div className="divider" />

      <h2 className="text-lg font-bold mb-2">Add Nodes</h2>

      <button className="btn btn-info btn-outline btn-sm btn-plus" onClick={addSceneNode}>
        Scene Node
      </button>

      <button className="btn btn-success btn-sm btn-plus" onClick={addStartSceneNode}>
        Add Start Scene Node
      </button>

      <button className="btn btn-warning btn-outline btn-sm btn-plus" onClick={addEndSceneNode}>
        Add End Scene Node
      </button>

      <button className="btn btn-secondary btn-sm btn-plus" onClick={addDecisionNode}>
        Decision Node
      </button>

      <button className="btn btn-outline btn-sm" onClick={() => relayout()}>
        Auto layout
      </button>

      <div className="divider" />

      <button className="btn btn-primary btn-sm" onClick={exportToJson}>
        Export JSON
      </button>

      <button className="btn btn-accent btn-sm" onClick={handleImportClick}>
        Import JSON
      </button>

      <div className="divider" />
      
      <button className="btn btn-ghost btn-sm"
        onClick={handleNavigateBack}>
        Back to Game
      </button>
    </aside>
  );
}