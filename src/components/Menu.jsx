import React, { useState } from "react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { IoIosColorPalette } from "react-icons/io";
import { ColorMenu } from "./index";
import { Slider } from "@/components/ui/slider"


export default function Menu() {

    const [sliderValue, setSliderValue] = useState(33);

    const handleSliderChange = (value) => {
        // Handle single value or array
        setSliderValue(Array.isArray(value) ? value[0] : value);
    };

    return (
        <div className="flex flex-col items-center justify-center space-x-4 p-2 bg-gray-800 text-white shadow-lg rounded-lg">
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
                            defaultValue={[33]}
                            max={100}
                            step={1}
                            className="bg-gray-400 rounded w-full"
                            onValueChange={handleSliderChange} // Slider's value is an array
                        />
                    </div>
                </PopoverContent>
            </Popover>

        </div>
    );

}