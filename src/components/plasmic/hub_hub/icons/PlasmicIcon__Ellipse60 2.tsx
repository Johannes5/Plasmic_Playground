// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse60IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse60Icon(props: Ellipse60IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 9"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"4.308"}
        cy={"4.308"}
        r={"3.385"}
        stroke={"currentColor"}
        strokeWidth={"1.846"}
      ></circle>
    </svg>
  );
}

export default Ellipse60Icon;
/* prettier-ignore-end */
