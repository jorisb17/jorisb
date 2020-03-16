import React from "react";

const SVG = ({style = {}, fill = '#000', width = "100%", className="", viewBox = "0 0 24 24"}) => (
    <svg
        width={width}
        style={style}
        height={width}
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        className={`svg-icon ${className || ""}`}
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" fill={"none"}/>
        <path d="M0 0h24v24H0V0z" fill={fill}/>
    </svg>
);

export default SVG;