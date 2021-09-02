// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Color2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Color2Icon(props: Color2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 23 23"}
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
          "M2.752 0A2.752 2.752 0 000 2.752v16.51a2.752 2.752 0 002.752 2.752h16.51a2.752 2.752 0 002.752-2.752V2.752A2.752 2.752 0 0019.262 0H2.752zm13.482 8.292a.917.917 0 00-1.297-1.297l-5.466 5.466-1.802-1.802a.917.917 0 10-1.297 1.297l2.45 2.45a.917.917 0 001.298 0l6.114-6.114z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Color2Icon;
/* prettier-ignore-end */
