// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PocketWithShadowsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PocketWithShadowsvgIcon(props: PocketWithShadowsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 52 51"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#6e9bbVXGOa)"}>
        <path
          d={
            "M26.137 20.565c.212.847-.047 1.082-1.224 1.082-.94 0-1.035.047-1.035.565 0 .541.118.588 1.13.659l1.105.07.071 2.47c.047 1.365.024 2.683-.047 2.942-.094.33-1.082 1.035-2.918 2.07C21.69 31.294 20.302 32 20.113 32c-.376 0-5.694-3.035-5.952-3.388-.095-.141-.142-1.483-.118-2.965l.07-2.706 1.13-.07c.988-.071 1.106-.142 1.106-.636s-.118-.564-1.106-.635c-.87-.047-1.153-.165-1.2-.494C13.83 20.07 14.184 20 20.255 20h5.74l.142.565z"
          }
          fill={"#D6455B"}
        ></path>

        <path
          d={
            "M17 23c0 .84.167 1 1 1s1-.16 1-1-.167-1-1-1-1 .16-1 1zm4 0c0 .8.2 1 1 1s1-.2 1-1-.2-1-1-1-1 .2-1 1z"
          }
          fill={"#403D3D"}
        ></path>
      </g>

      <defs>
        <filter
          id={"6e9bbVXGOa"}
          x={"-15"}
          y={"-8.5"}
          width={"69"}
          height={"70"}
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
            values={
              "0 0 0 0 0.570833 0 0 0 0 0.133385 0 0 0 0 0.0737326 0 0 0 1 0"
            }
          ></feColorMatrix>

          <feBlend
            mode={"lighten"}
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

export default PocketWithShadowsvgIcon;
/* prettier-ignore-end */
