// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse20IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse20Icon(props: Ellipse20IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 29 29"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"14.5"}
        cy={"14.5"}
        r={"13"}
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={"3"}
      ></circle>
    </svg>
  );
}

export default Ellipse20Icon;
/* prettier-ignore-end */
