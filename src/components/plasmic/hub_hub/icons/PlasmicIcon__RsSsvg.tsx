// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RsSsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RsSsvgIcon(props: RsSsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 62 62"}
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

      <g filter={"url(#jMuVDokyka)"}>
        <path
          d={
            "M28.524 24.742c1.863.582 4.23 2.41 5.463 4.238 1.184 1.722 2.09 4.345 2.09 5.987V36l-1.057-.08-1.083-.079-.201-1.457c-.529-3.973-3.676-7.232-7.528-7.814L25 26.384V24l1.158.185c.63.08 1.687.345 2.366.557zm-.377 4.08c2.064.953 3.801 3.443 4.078 5.854l.151 1.297H31.32c-.906 0-1.032-.079-1.032-.609-.025-2.172-2.644-4.953-4.683-4.953-.554 0-.604-.106-.604-1.219v-1.218l1.082.185c.58.106 1.511.397 2.065.662zm-.554 4.026c.227.185.478.662.554 1.06.126.556.025.873-.478 1.377-.756.821-1.486.874-2.166.159-.604-.636-.654-1.775-.075-2.437.478-.557 1.56-.636 2.165-.16z"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <filter
          id={"jMuVDokyka"}
          x={"0"}
          y={"0"}
          width={"61.077"}
          height={"62"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feColorMatrix
            in={"SourceAlpha"}
            type={"matrix"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
            result={"hardAlpha"}
          ></feColorMatrix>

          <feOffset dy={"1"}></feOffset>

          <feGaussianBlur stdDeviation={"12.5"}></feGaussianBlur>

          <feColorMatrix
            type={"matrix"}
            values={"0 0 0 0 0.5355 0 0 0 0 0.2625 0 0 0 0 0.75 0 0 0 1 0"}
          ></feColorMatrix>

          <feBlend
            mode={"normal"}
            in2={"BackgroundImageFix"}
            result={"effect1_dropShadow"}
          ></feBlend>

          <feBlend
            mode={"normal"}
            in={"SourceGraphic"}
            in2={"effect1_dropShadow"}
            result={"shape"}
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default RsSsvgIcon;
/* prettier-ignore-end */
