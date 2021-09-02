// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AddCirclesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AddCirclesvgIcon(props: AddCirclesvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 12"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#In1ia7iE4a)"}>
        <circle
          cx={"6.5"}
          cy={"5.5"}
          r={"3.5"}
          fill={"#4062DD"}
          fillOpacity={".85"}
        ></circle>

        <circle cx={"6.5"} cy={"5.5"} r={"3.5"} fill={"#5978E8"}></circle>

        <rect
          x={"6.219"}
          y={"3.531"}
          width={".563"}
          height={"3.938"}
          rx={".281"}
          fill={"#FDFBF7"}
        ></rect>

        <rect
          x={"4.531"}
          y={"5.781"}
          width={".563"}
          height={"3.938"}
          rx={".281"}
          transform={"rotate(-90 4.531 5.781)"}
          fill={"#FDFBF7"}
        ></rect>
      </g>

      <defs>
        <filter
          id={"In1ia7iE4a"}
          x={".813"}
          y={".25"}
          width={"11.375"}
          height={"11.375"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feColorMatrix
            in={"SourceAlpha"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
          ></feColorMatrix>

          <feOffset dy={".438"}></feOffset>

          <feGaussianBlur stdDeviation={"1.094"}></feGaussianBlur>

          <feColorMatrix
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"}
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

export default AddCirclesvgIcon;
/* prettier-ignore-end */
