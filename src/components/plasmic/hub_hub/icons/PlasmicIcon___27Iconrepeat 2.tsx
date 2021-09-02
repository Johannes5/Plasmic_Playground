// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _27IconrepeatIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _27IconrepeatIcon(props: _27IconrepeatIconProps) {
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
          "M1.94 1.64h3.934c.649 0 1.177.519 1.177 1.157v.81a.328.328 0 11-.656 0v-.81a.513.513 0 00-.521-.501H1.94l.424.424a.328.328 0 01-.464.464L.916 2.2a.328.328 0 010-.464L1.9.752a.328.328 0 11.464.464l-.424.424zm3.568 3.048a.328.328 0 01.463 0l.984.984a.328.328 0 010 .463l-.984.984a.327.327 0 11-.463-.463l.424-.424H1.997c-.65 0-1.177-.52-1.177-1.158v-.81a.328.328 0 11.656 0v.81c0 .277.234.502.521.502h3.935l-.424-.425a.328.328 0 010-.463z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _27IconrepeatIcon;
/* prettier-ignore-end */
