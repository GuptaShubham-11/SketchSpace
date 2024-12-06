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
        <div>
            <HexColorPicker color={color} onChange={handleChange} />
        </div>
    );
};

export default ColorMenu;
