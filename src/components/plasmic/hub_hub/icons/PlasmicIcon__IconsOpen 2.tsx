// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconsOpenIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconsOpenIcon(props: IconsOpenIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
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
          "M8.499 2l5.036.001.066.01.066.018.041.017a.48.48 0 01.145.1l.027.03.04.054.026.043.025.06.013.043.01.043.005.062v5.022a.5.5 0 01-.995.068L13 7.503V3.706l-9.294 9.297H7.5a.5.5 0 01.495.433l.005.067a.5.5 0 01-.432.496l-.068.004H2.476L2.456 14a.474.474 0 01-.125-.026l-.06-.026-.011-.007a.497.497 0 01-.256-.369l-.005-.07V8.501a.5.5 0 01.995-.068L3 8.501v3.795L12.292 3H8.5a.5.5 0 01-.496-.431L8 2.5a.5.5 0 01.432-.496L8.5 2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconsOpenIcon;
/* prettier-ignore-end */
