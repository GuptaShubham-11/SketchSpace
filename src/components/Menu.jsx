import React, { useState } from "react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { IoIosColorPalette } from "react-icons/io";
import { ColorMenu } from "./index";
import { Slider } from "@/components/ui/slider";
import { LuUndo2, LuRedo2 } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { setStrokeWidth } from "../features/canvasSlice";


export default function Menu({ canvasRef }) {

    const [sliderValue, setSliderValue] = useState(7);
    const dispatch = useDispatch();

    const handleSliderChange = (value) => {
        const sliderValue = Array.isArray(value) ? value[0] : value;

        // Update local state and Redux store
        setSliderValue(sliderValue);
        dispatch(setStrokeWidth(sliderValue));
    };

    const handleUndo = () => {
        if (canvasRef?.current) {
            canvasRef.current.undo();
        }
    }

    const handleRedo = () => {
        if (canvasRef?.current) {
            canvasRef.current.redo();
        }
    }

    return (
        <div className="flex flex-col items-center justify-center p-2 bg-gray-800 text-white shadow-lg rounded-lg">
            <Popover>
                <PopoverTrigger className="flex flex-col items-center p-2 hover:bg-gray-700 rounded">
                    <IoIosColorPalette color="white" />
                    Color
                </PopoverTrigger>
                <PopoverContent
                    side="right"
                    align="center"
                    className="w-auto h-auto p-4 ml-2 mt-2 border-none bg-gray-800 text-white rounded shadow-lg"
                >
                    <ColorMenu />
                    <div className="mt-6">
                        <span className="block mb-2 text-sm text-gray-300">
                            Slider Value: {sliderValue}
                        </span>
                        <Slider
                            defaultValue={[sliderValue]}
                            max={20}
                            step={1}
                            className="bg-gray-400 rounded w-full"
                            onValueChange={handleSliderChange} // Slider's value is an array
                        />
                    </div>
                </PopoverContent>
            </Popover>

            {/* Undo Button */}
            <button
                onClick={handleUndo}
                className="flex flex-col items-center p-2 hover:bg-gray-700 rounded"
                title="Undo"
            >
                <LuUndo2 />
                <span className="text-xs mt-1">Undo</span>
            </button>

            {/* Redo Button */}
            <button
                onClick={handleRedo}
                className="flex flex-col items-center p-2 hover:bg-gray-700 rounded"
                title="Redo"
            >
                <LuRedo2 />
                <span className="text-xs mt-1">Redo</span>
            </button>
        </div>
    );

}