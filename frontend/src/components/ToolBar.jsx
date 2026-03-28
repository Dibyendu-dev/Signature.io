export default function Toolbar({
  undo,
  redo,
  exportSVG,
  color,
  setColor,
  size,
  setSize,
}) {
  return (
    <div className="flex flex-wrap items-center gap-4 p-4 bg-white border border-gray-200 rounded-xl shadow-sm mb-4">
      {/* Action Buttons */}
      <div className="flex items-center gap-2">
        <button
          onClick={undo}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 active:bg-gray-300 transition-colors duration-200 flex items-center gap-1"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
          </svg>
          Undo
        </button>
        <button
          onClick={redo}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 active:bg-gray-300 transition-colors duration-200 flex items-center gap-1"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10h-10a8 8 0 00-8 8v2M21 10l-6 6m6-6l-6-6" />
          </svg>
          Redo
        </button>
        <button
          onClick={exportSVG}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200 flex items-center gap-1"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Export SVG
        </button>
      </div>

      {/* Divider */}
      <div className="w-px h-8 bg-gray-300 hidden sm:block" />

      {/* Color Picker */}
      <div className="flex items-center gap-3">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
          <div className="relative">
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-10 h-10 rounded-lg cursor-pointer border-2 border-gray-300 hover:border-gray-400 transition-colors duration-200"
            />
          </div>
          <span className="hidden sm:inline">Color</span>
        </label>
      </div>

      {/* Divider */}
      <div className="w-px h-8 bg-gray-300 hidden sm:block" />

      {/* Brush Size */}
      <div className="flex items-center gap-3">
        <label className="flex items-center gap-3 text-sm font-medium text-gray-700">
          <span className="hidden sm:inline">Size</span>
          <input
            type="range"
            min="1"
            max="20"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="w-32 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 hover:accent-blue-700"
          />
          <span className="w-6 text-center text-sm font-semibold text-gray-900 bg-gray-100 rounded-md py-1">
            {size}
          </span>
        </label>
      </div>
    </div>
  );
}