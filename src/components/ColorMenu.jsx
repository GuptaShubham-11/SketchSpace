import React from "react";
import { useDispatch } from "react-redux";
import { setColor } from "../features/canvasSlice";
import { useSelector } from "react-redux";
import { HexColorPicker } from "react-colorful";
import Draggable from "react-draggable";

const ColorMenu = ({ onChange }) => {
    const dispatch = useDispatch();
    const { color } = useSelector((state) => state.canvas);

    const handleChange = (newColor) => {
        dispatch(setColor(newColor));
    };

    return (
        <Draggable
            bounds="body"
        >
            <div className="h-20 w-24 rounded">
                <HexColorPicker color={color} onChange={handleChange} />
            </div>
        </Draggable>
    );
};

export default ColorMenu;
