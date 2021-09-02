// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconsPlayIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconsPlayIcon(props: IconsPlayIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 54 56"}
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

      <g filter={"url(#o05K7hF93Na)"}>
        <path
          d={
            "M7 10.867v30.27c0 4.086 4.313 6.735 7.958 4.887l29.226-14.82a5.48 5.48 0 003.002-4.887v-.837a5.48 5.48 0 00-3.029-4.902L14.931 5.965C11.287 4.144 7 6.793 7 10.867z"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <filter
          id={"o05K7hF93Na"}
          x={".294"}
          y={".909"}
          width={"53.598"}
          height={"54.655"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feColorMatrix
            in={"SourceAlpha"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
          ></feColorMatrix>

          <feOffset dy={"2.235"}></feOffset>

          <feGaussianBlur stdDeviation={"3.353"}></feGaussianBlur>

          <feColorMatrix
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}
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

export default IconsPlayIcon;
/* prettier-ignore-end */
