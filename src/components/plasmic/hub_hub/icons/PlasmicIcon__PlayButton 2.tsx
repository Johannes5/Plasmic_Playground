// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PlayButtonIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PlayButtonIcon(props: PlayButtonIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 75 77"}
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
          "M0 10.308V66.43c0 7.578 7.996 12.489 14.755 9.062l54.187-27.476a10.16 10.16 0 005.566-9.061v-1.553a10.16 10.16 0 00-5.617-9.087L14.704 1.22C7.948-2.157 0 2.756 0 10.308z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PlayButtonIcon;
/* prettier-ignore-end */
