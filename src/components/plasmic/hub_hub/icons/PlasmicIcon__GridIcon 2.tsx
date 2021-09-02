// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GridIconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GridIconIcon(props: GridIconIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 12"}
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

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M1.273 0C.57 0 0 .57 0 1.273v2.454C0 4.43.57 5 1.273 5h2.454C4.43 5 5 4.43 5 3.727V1.273C5 .57 4.43 0 3.727 0H1.273zm6.363 0c-.703 0-1.272.57-1.272 1.273v2.454C6.364 4.43 6.934 5 7.636 5h2.455c.703 0 1.273-.57 1.273-1.273V1.273C11.364.57 10.794 0 10.09 0H7.636zM6.364 7.636c0-.702.57-1.272 1.272-1.272h2.455c.703 0 1.273.57 1.273 1.272v2.455c0 .703-.57 1.273-1.273 1.273H7.636c-.703 0-1.272-.57-1.272-1.273V7.637zM1.273 6.364C.57 6.364 0 6.934 0 7.636v2.455c0 .703.57 1.273 1.273 1.273h2.454c.703 0 1.273-.57 1.273-1.273V7.637c0-.703-.57-1.273-1.273-1.273H1.273z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GridIconIcon;
/* prettier-ignore-end */
