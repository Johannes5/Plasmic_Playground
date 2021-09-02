// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Iconinfo3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Iconinfo3Icon(props: Iconinfo3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 11"}
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
          "M4.812 3.5a.438.438 0 11.876 0 .438.438 0 01-.876 0zm0 1.312a.438.438 0 01.875 0V7a.438.438 0 01-.875 0V4.812zM5.25 8.75c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5m0-7.875a4.375 4.375 0 100 8.75 4.375 4.375 0 000-8.75"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Iconinfo3Icon;
/* prettier-ignore-end */
