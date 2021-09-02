// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Add24FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Add24FilledIcon(props: Add24FilledIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
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
          "M11.883 3.007L12 3a1 1 0 01.993.883L13 4v7h7a1 1 0 01.993.883L21 12a1 1 0 01-.883.993L20 13h-7v7a1 1 0 01-.883.993L12 21a1 1 0 01-.993-.883L11 20v-7H4a1 1 0 01-.993-.883L3 12a1 1 0 01.883-.993L4 11h7V4a1 1 0 01.883-.993L12 3l-.117.007z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Add24FilledIcon;
/* prettier-ignore-end */
