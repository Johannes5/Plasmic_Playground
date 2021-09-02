// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Subtract3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Subtract3Icon(props: Subtract3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 4"}
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
          "M7.464 3.393H0c.38-.277.758-.745 1.096-1.417C1.545.813 2.566 0 3.756 0c1.123 0 2.097.725 2.58 1.786V1.74c.343.748.733 1.28 1.128 1.607v.045z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Subtract3Icon;
/* prettier-ignore-end */
