// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MenuIcon2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MenuIcon2Icon(props: MenuIcon2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 23"}
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

      <circle
        cx={"2.312"}
        cy={"20.544"}
        r={"2.312"}
        fill={"currentColor"}
      ></circle>

      <circle
        cx={"2.312"}
        cy={"11.428"}
        r={"2.312"}
        fill={"currentColor"}
      ></circle>

      <circle
        cx={"2.312"}
        cy={"2.312"}
        r={"2.312"}
        fill={"currentColor"}
      ></circle>
    </svg>
  );
}

export default MenuIcon2Icon;
/* prettier-ignore-end */
