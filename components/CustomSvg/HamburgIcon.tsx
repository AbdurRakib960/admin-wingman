import React from "react";
import CustomIcon, { IconType } from "./CustomIcon";

function Hamburg(props: IconType) {
  return (
    <CustomIcon
      {...props}
      svg={({ height, width, className, groupClassName, color, stroke }) => (
        <svg
          width={width}
          height={height}
          viewBox="0 0 18 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="0.65918" width="18" height="2.11005" fill={color} />
          <rect y="6.28613" width="18" height="2.11005" fill={color} />
          <rect y="12.3408" width="18" height="2" fill={color} />
        </svg>
      )}
    />
  );
}

export default Hamburg;
