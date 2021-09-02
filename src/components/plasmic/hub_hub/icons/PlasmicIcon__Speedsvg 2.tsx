// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SpeedsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SpeedsvgIcon(props: SpeedsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 39 33"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#Dj2reLSmna)"}>
        <path
          fillRule={"evenodd"}
          clipRule={"evenodd"}
          d={
            "M19.02 25a7.98 7.98 0 100-15.96 7.98 7.98 0 000 15.96zm4.67-10.869a1.26 1.26 0 00-1.781-1.782l-4.2 4.2a1.26 1.26 0 001.782 1.782l4.2-4.2z"
          }
          fill={"#FDFBF7"}
        ></path>

        <circle
          cx={"7.26"}
          cy={"17.02"}
          r={"1.26"}
          fill={"#4062DD"}
          fillOpacity={".85"}
        ></circle>

        <circle cx={"7.26"} cy={"17.02"} r={"1.26"} fill={"#5978E8"}></circle>

        <circle
          cx={"30.78"}
          cy={"17.02"}
          r={"1.26"}
          fill={"#4062DD"}
          fillOpacity={".85"}
        ></circle>

        <circle cx={"30.78"} cy={"17.02"} r={"1.26"} fill={"#5978E8"}></circle>

        <circle
          cx={"27.42"}
          cy={"8.62"}
          r={"1.26"}
          fill={"#4062DD"}
          fillOpacity={".85"}
        ></circle>

        <circle cx={"27.42"} cy={"8.62"} r={"1.26"} fill={"#5978E8"}></circle>

        <circle
          cx={"10.62"}
          cy={"8.62"}
          r={"1.26"}
          fill={"#4062DD"}
          fillOpacity={".85"}
        ></circle>

        <circle cx={"10.62"} cy={"8.62"} r={"1.26"} fill={"#5978E8"}></circle>

        <circle
          cx={"19.02"}
          cy={"5.26"}
          r={"1.26"}
          fill={"#4062DD"}
          fillOpacity={".85"}
        ></circle>

        <circle cx={"19.02"} cy={"5.26"} r={"1.26"} fill={"#5978E8"}></circle>
      </g>

      <defs>
        <filter
          id={"Dj2reLSmna"}
          x={"0"}
          y={"0"}
          width={"38.04"}
          height={"33"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feColorMatrix
            in={"SourceAlpha"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
          ></feColorMatrix>

          <feOffset dy={"2"}></feOffset>

          <feGaussianBlur stdDeviation={"3"}></feGaussianBlur>

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

export default SpeedsvgIcon;
/* prettier-ignore-end */
