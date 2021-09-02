// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VectorIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VectorIcon(props: VectorIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 8"}
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
        d={
          "M9.564.118a.396.396 0 00-.564 0L3.995 5.201a.396.396 0 01-.564 0L1.437 3a.396.396 0 00-.565 0l-.756.768a.411.411 0 000 .573l3.315 3.54c.155.158.41.158.564 0L10.32 1.46a.41.41 0 000-.573L9.564.118z"
        }
        fill={"currentColor"}
        fillOpacity={".8"}
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */
