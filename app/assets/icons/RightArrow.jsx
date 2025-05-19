"use client";
import React from "react";

export default function RightArrow({ ref, style, size }) {
  return (
    <svg
      style={style}
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_13043_195)">
        <path
          ref={ref}
          d="M7.24857 13.25L13.4986 7M13.4986 7L7.24857 0.75M13.4986 7H1"
          stroke="#153e2a"
          strokeWidth="0.75"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_13043_195">
          <rect width="14" height="14" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
