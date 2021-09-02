// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MenuIcon3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MenuIcon3Icon(props: MenuIcon3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 43"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#hqsRP3fHma)"}>
        <circle
          cx={"12.312"}
          cy={"27.543"}
          r={"2.312"}
          fill={"currentColor"}
        ></circle>
      </g>

      <g filter={"url(#hqsRP3fHmb)"}>
        <circle
          cx={"12.312"}
          cy={"18.427"}
          r={"2.312"}
          fill={"currentColor"}
        ></circle>
      </g>

      <g filter={"url(#hqsRP3fHmc)"}>
        <circle
          cx={"12.312"}
          cy={"9.312"}
          r={"2.312"}
          fill={"currentColor"}
        ></circle>
      </g>

      <defs>
        <filter
          id={"hqsRP3fHma"}
          x={".858"}
          y={"19.136"}
          width={"22.909"}
          height={"22.909"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feColorMatrix
            in={"SourceAlpha"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
          ></feColorMatrix>

          <feOffset dy={"3.047"}></feOffset>

          <feGaussianBlur stdDeviation={"4.571"}></feGaussianBlur>

          <feColorMatrix
            values={"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"}
          ></feColorMatrix>

          <feBlend
            in2={"BackgroundImageFix"}
            result={"effect1_dropShadow"}
          ></feBlend>

          <feBlend
            in={"SourceGraphic"}
            in2={"effect1_dropShadow"}
            result={"shape"}
          ></feBlend>
        </filter>

        <filter
          id={"hqsRP3fHmb"}
          x={".858"}
          y={"10.02"}
          width={"22.909"}
          height={"22.909"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feColorMatrix
            in={"SourceAlpha"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
          ></feColorMatrix>

          <feOffset dy={"3.047"}></feOffset>

          <feGaussianBlur stdDeviation={"4.571"}></feGaussianBlur>

          <feColorMatrix
            values={"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"}
          ></feColorMatrix>

          <feBlend
            in2={"BackgroundImageFix"}
            result={"effect1_dropShadow"}
          ></feBlend>

          <feBlend
            in={"SourceGraphic"}
            in2={"effect1_dropShadow"}
            result={"shape"}
          ></feBlend>
        </filter>

        <filter
          id={"hqsRP3fHmc"}
          x={".858"}
          y={".905"}
          width={"22.909"}
          height={"22.909"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feColorMatrix
            in={"SourceAlpha"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
          ></feColorMatrix>

          <feOffset dy={"3.047"}></feOffset>

          <feGaussianBlur stdDeviation={"4.571"}></feGaussianBlur>

          <feColorMatrix
            values={"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"}
          ></feColorMatrix>

          <feBlend
            in2={"BackgroundImageFix"}
            result={"effect1_dropShadow"}
          ></feBlend>

          <feBlend
            in={"SourceGraphic"}
            in2={"effect1_dropShadow"}
            result={"shape"}
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default MenuIcon3Icon;
/* prettier-ignore-end */
