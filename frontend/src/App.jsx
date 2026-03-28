import { useRef } from "react";
import CanvasBoard from "./components/CanvasBoard";
import Toolbar from "./components/ToolBar";
import { useDraw } from "./hooks/useDraw";

export default function App() {
  const canvasRef = useRef(null);

  const draw = useDraw(canvasRef);

  return (
    <div className="h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4 flex flex-col overflow-hidden">
      <div className="max-w-6xl mx-auto w-full flex flex-col flex-1 min-h-0">
        {/* Header */}
        <div className="mb-4 text-center flex-shrink-0">
          <h1 className="text-2xl font-bold text-gray-800 mb-1">Mini Canva Multiplayer</h1>
          <p className="text-gray-500 text-sm">Draw freely with smooth strokes and share your creations</p>
        </div>

        {/* Toolbar */}
        <div className="flex-shrink-0">
          <Toolbar
            undo={draw.undo}
            redo={draw.redo}
            exportSVG={draw.exportSVG}
            color={draw.color}
            setColor={draw.setColor}
            size={draw.size}
            setSize={draw.setSize}
          />
        </div>

        {/* Canvas Board */}
        <div className="flex-1 min-h-0 flex justify-center py-4">
          <CanvasBoard canvasRef={canvasRef} {...draw} />
        </div>
      </div>
    </div>
  );
}
