// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon2Icon(props: Icon2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 52 53"}
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

      <g filter={"url(#3m7B1FqM1a)"}>
        <path
          d={
            "M8 10.933v27.084c0 3.656 3.859 6.026 7.12 4.373l26.15-13.26a4.903 4.903 0 002.686-4.372v-.75a4.903 4.903 0 00-2.71-4.385L15.096 6.548C11.836 4.918 8 7.288 8 10.933z"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <filter
          id={"3m7B1FqM1a"}
          x={"0"}
          y={".024"}
          width={"51.956"}
          height={"52.902"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feColorMatrix
            in={"SourceAlpha"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
          ></feColorMatrix>

          <feOffset dy={"2"}></feOffset>

          <feGaussianBlur stdDeviation={"4"}></feGaussianBlur>

          <feColorMatrix
            values={
              "0 0 0 0 0.348194 0 0 0 0 0.469498 0 0 0 0 0.908333 0 0 0 0.8 0"
            }
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

export default Icon2Icon;
/* prettier-ignore-end */
