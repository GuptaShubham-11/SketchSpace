import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tool: 'pen', // Active tool
    color: '#000000', // Current color
    strokeWidth: 2, // Brush size
    eraserWidth: 4, // Eraser size
}

const canvasSlice = createSlice({
    name: 'canvas',
    initialState,
    reducers: {
        setTool: (state, action) => {
            state.tool = action.payload;
        },
        setColor: (state, action) => {
            state.color = action.payload;
        },
        setStrokeWidth: (state, action) => {
            state.strokeWidth = action.payload;
        },
        setEraserWidth: (state, action) => {
            state.eraserWidth =  action.payload;
        }
    }
});

export const {setTool, setColor, setStrokeWidth, setEraserWidth} = canvasSlice.actions
export default canvasSlice.reducer