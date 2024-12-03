import React from "react";

export default function Button({ type = 'button', children, ...props }) {
    return (
        <button
            type={type}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            {...props}
        >
            {children}
        </button>
    )
}