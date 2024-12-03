import React from "react";
import { useDispatch } from "react-redux";
import { setTool } from "../features/canvasSlice";
import { FiPenTool, FiCircle, FiSquare, FiArrowRight } from "react-icons/fi";
import { TfiEraser } from "react-icons/tfi";

const Toolbox = () => {
  const dispatch = useDispatch();

  const tools = [
    { id: "pen", label: "Pen", icon: <FiPenTool /> },
    { id: "eraser", label: "Eraser", icon: <TfiEraser /> },
    { id: "arrow", label: "Arrow", icon: <FiArrowRight /> },
    { id: "circle", label: "Circle", icon: <FiCircle /> },
    { id: "square", label: "Square", icon: <FiSquare /> },
  ];

  const handleToolSelect = (toolId) => {
    dispatch(setTool(toolId));
  };

  return (
    <div className="flex flex-row items-center justify-center space-x-4 p-4 bg-gray-800 text-white shadow-lg rounded-lg">
      {tools.map((tool) => (
        <button
          key={tool.id}
          onClick={() => handleToolSelect(tool.id)}
          className="flex flex-col items-center p-2 hover:bg-gray-700 rounded"
          title={tool.label}
        >
          {tool.icon}
          <span className="text-xs mt-1">{tool.label}</span>
        </button>
      ))}
    </div>
  );
};

export default Toolbox;
