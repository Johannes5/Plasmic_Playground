// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Iconinfo2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Iconinfo2Icon(props: Iconinfo2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 8"}
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
          "M3.667 2.667a.333.333 0 11.667 0 .333.333 0 01-.667 0zm0 1a.333.333 0 01.666 0v1.666a.333.333 0 01-.666 0V3.666zm.333 3A2.67 2.67 0 011.333 4 2.67 2.67 0 014 1.333 2.67 2.67 0 016.667 4 2.67 2.67 0 014 6.667m0-6a3.333 3.333 0 100 6.666A3.333 3.333 0 004 .667"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Iconinfo2Icon;
/* prettier-ignore-end */
