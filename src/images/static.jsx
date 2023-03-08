import * as React from "react";
const SVGComponent = (props) => (
  <svg
    xmlSpace="preserve"
    viewBox="0 0 100 100"
    y={0}
    x={0}
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    width="200px"
    height="200px"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    style={{
      width: "100%",
      height: "100%",
      backgroundSize: "initial",
      backgroundRepeatY: "initial",
      backgroundRepeatX: "initial",
      backgroundPositionY: "initial",
      backgroundPositionX: "initial",
      backgroundOrigin: "initial",
      backgroundColor: "initial",
      backgroundClip: "initial",
      backgroundAttachment: "initial",
      animationPlayState: "paused",
    }}
    {...props}
  >
    <g
      className="ldl-scale"
      style={{
        transformOrigin: "50% 50%",
        transform: "rotate(0deg) scale(0.8, 0.8)",
        animationPlayState: "paused",
      }}
    >
      <path
        fill="#acbd81"
        d="M50 50v40c17.8 0 32.8-11.6 38-27.6L50 50z"
        style={{
          fill: "rgb(172, 189, 129)",
          animationPlayState: "paused",
        }}
      />
      <path
        fill="#849b87"
        d="M50 50l38 12.4c5.5-16.9-.9-34.8-14.5-44.7L50 50z"
        style={{
          fill: "rgb(132, 155, 135)",
          animationPlayState: "paused",
        }}
      />
      <path
        fill="#e15c64"
        d="M50 50l23.5-32.4c-14.4-10.4-33.4-9.9-47 0L50 50z"
        style={{
          fill: "rgb(225, 92, 100)",
          animationPlayState: "paused",
        }}
      />
      <path
        fill="#f47e5f"
        d="M50 50L26.5 17.6A39.945 39.945 0 0 0 12 62.4L50 50z"
        style={{
          fill: "rgb(244, 126, 95)",
          animationPlayState: "paused",
        }}
      />
      <path
        fill="#f7b26a"
        d="M50 50L12 62.4C17.5 79.3 33.1 90 50 90V50z"
        style={{
          fill: "rgb(247, 178, 106)",
          animationPlayState: "paused",
        }}
      />
    </g>
  </svg>
);
export default SVGComponent;
