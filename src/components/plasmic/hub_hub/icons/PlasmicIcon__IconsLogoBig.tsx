// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconsLogoBigIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconsLogoBigIcon(props: IconsLogoBigIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 27"}
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
          "M9.17 9.21c0-.403.224-.773.58-.962l4.127-2.183a1.089 1.089 0 011.598.963v15.805c0 .403-.223.774-.58.962l-4.126 2.183a1.089 1.089 0 01-1.599-.962V9.21zM6.305 1.808A1.09 1.09 0 004.707.845L.58 3.028a1.09 1.09 0 00-.58.963v5.058c0 .409.229.783.592.97l4.127 2.116a1.089 1.089 0 001.586-.969V1.808zM0 15.546v4.075c0 .815.861 1.34 1.586.969l4.184-2.147a.983.983 0 00-.005-1.752l-4.184-2.117A1.089 1.089 0 000 15.546z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M0 3.99c0-.403.223-.773.58-.962L4.707.845a1.089 1.089 0 011.598.963v15.805c0 .404-.223.774-.58.963l-4.127 2.183A1.089 1.089 0 010 19.796V3.99z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconsLogoBigIcon;
/* prettier-ignore-end */
