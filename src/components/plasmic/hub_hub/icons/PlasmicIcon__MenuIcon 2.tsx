// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MenuIconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MenuIconIcon(props: MenuIconIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 15"}
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
        cx={"1.458"}
        cy={"12.949"}
        r={"1.457"}
        fill={"currentColor"}
      ></circle>

      <circle
        cx={"1.458"}
        cy={"7.203"}
        r={"1.457"}
        fill={"currentColor"}
      ></circle>

      <circle
        cx={"1.457"}
        cy={"1.457"}
        r={"1.457"}
        fill={"currentColor"}
      ></circle>
    </svg>
  );
}

export default MenuIconIcon;
/* prettier-ignore-end */
