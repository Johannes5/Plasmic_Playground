// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ProgressbarIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ProgressbarIcon(props: ProgressbarIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 113 4"}
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
        d={"M0 0h113v4H2.5l-1-.5L1 3l-.5-.5L0 1V0z"}
        fill={"currentColor"}
        fillOpacity={".8"}
      ></path>
    </svg>
  );
}

export default ProgressbarIcon;
/* prettier-ignore-end */
