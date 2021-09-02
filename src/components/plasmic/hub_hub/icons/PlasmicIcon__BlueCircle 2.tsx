// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BlueCircleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BlueCircleIcon(props: BlueCircleIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 29 29"}
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
        cx={"14.399"}
        cy={"14.399"}
        r={"14.399"}
        fill={"currentColor"}
      ></circle>
    </svg>
  );
}

export default BlueCircleIcon;
/* prettier-ignore-end */
