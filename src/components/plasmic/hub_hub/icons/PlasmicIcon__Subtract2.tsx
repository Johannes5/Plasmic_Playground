// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Subtract2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Subtract2Icon(props: Subtract2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 4"}
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
          "M8.143 3.393H0c.414-.277.827-.745 1.196-1.417C1.686.813 2.8 0 4.097 0c1.225 0 2.288.725 2.815 1.786V1.74c.374.748.8 1.28 1.23 1.607v.045z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Subtract2Icon;
/* prettier-ignore-end */
