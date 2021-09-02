// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle1481IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle1481Icon(props: Rectangle1481IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 41 49"}
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
        d={"M0 0v48.059l40.186-20.376v-7.59L0 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle1481Icon;
/* prettier-ignore-end */
