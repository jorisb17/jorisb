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
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" fill={fill}/>
    </svg>
);

export default SVG;