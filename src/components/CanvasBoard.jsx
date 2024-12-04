import React, { useRef } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import { useSelector } from "react-redux";
import { Toolbox, ColorMenu } from "./index";
import { Slider } from "./ui/slider";

export default function CanvasBoard() {

    const canvasRef = useRef(null);
    const { color, strokeWidth, tool, eraserWidth } = useSelector((state) => state.canvas);

    return (
        <div className="relative w-full h-screen bg-gray-100">
            {/* Fullscreen Canvas */}
            <ReactSketchCanvas
                ref={canvasRef}
                canvasColor="#212121"
                className="absolute top-0 left-0 w-full h-full"
                strokeWidth={tool === "pen" ? strokeWidth : eraserWidth}
                strokeColor={tool === "pen" ? color : "#212121"}
                style={{ border: "none" }}
            />

            <div className="absolute">
                <Toolbox />
            </div>

            <div className="absolute">
                <ColorMenu />
            </div>

            <div className="absolute mt-8 ml-8">
                <Slider 
                    className="bg-cyan-300"
                />
            </div>
        </div>
    );
}