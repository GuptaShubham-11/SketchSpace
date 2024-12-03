import React, { useRef } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import { useSelector, useDispatch } from "react-redux";
import { setTool, setColor, setStrokeWidth, setEraserWidth } from "../features/canvasSlice";
import {Button} from "./index";

export default function CanvasBoard() {

    const canvasRef = useRef(null);
    const dispatch = useDispatch();
    const { color, strokeWidth, tool, eraserWidth } = useSelector((state) => state.canvas);

    // ERASER KA ERROR NOT RESOLVE

    return (
        <div className="flex flex-col items-center p-4 bg-gray-800 min-h-screen w-full">
            <h2 className="text-2xl font-bold text-white mb-4">
                Collaborative Whiteboard
            </h2>

            <div className="mb-4 flex gap-2">
                {/* Tools */}
                <Button onClick={() => { dispatch(setTool('Pen')) }}>✒️</Button>
                <Button onClick={() => { dispatch(setTool('Eraser')) }}>🪩</Button>

                {/* Color Picker */}
                <input
                    type="color"
                    value={color}
                    onChange={(e) => dispatch(setColor(e.target.value))}
                    className="w-10 h-10 p-0 border-0"
                />

                {/* Stroke Width Slider */}
                <input
                    type="range"
                    min="1"
                    max="10"
                    value={strokeWidth}
                    onChange={(e) => dispatch(setStrokeWidth(Number(e.target.value)))}
                    className="w-24"
                />

                <input
                    type="range"
                    min="2"
                    max="20"
                    value={eraserWidth}
                    onChange={(e) => dispatch(setEraserWidth(Number(e.target.value)))}
                    className="w-24"
                />
            </div>

            <ReactSketchCanvas
                ref={canvasRef}
                className="border-2 border-gray-400 rounded-lg"
                width="800px"
                height="600px"
                canvasColor="#414141"
                strokeWidth={tool === "Pen" ? strokeWidth : eraserWidth}
                strokeColor={tool === "Pen" ? color : "#414141"}
            />
        </div>
    )
}