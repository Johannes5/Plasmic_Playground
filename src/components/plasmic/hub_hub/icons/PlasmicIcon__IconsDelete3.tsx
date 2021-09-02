// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconsDelete3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconsDelete3Icon(props: IconsDelete3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 17"}
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
          "M7.282 1.212c1.052 0 1.912.94 1.97 2.123l.003.128h3.186c.251 0 .455.233.455.52 0 .262-.171.48-.394.514l-.061.005h-.483l-.777 9.017c-.08.934-.744 1.656-1.554 1.714l-.107.004H5.045c-.823 0-1.517-.682-1.647-1.597l-.014-.121-.778-9.017h-.482c-.23 0-.42-.196-.451-.45l-.004-.07c0-.263.171-.48.393-.514l.062-.005H5.31c0-1.243.883-2.251 1.972-2.251zm3.761 3.29H3.521l.769 8.915c.036.414.322.736.678.777l.077.004H9.52c.364 0 .673-.294.744-.694l.01-.087.77-8.915zM8.344 6.407c.23 0 .421.195.451.448l.005.071v4.848c0 .287-.204.52-.456.52-.23 0-.42-.196-.45-.45l-.005-.07V6.926c0-.287.204-.52.455-.52zm-2.124 0c.23 0 .421.195.451.448l.005.071v4.848c0 .287-.204.52-.456.52-.23 0-.42-.196-.45-.45l-.005-.07V6.926c0-.287.204-.52.455-.52zM7.282 2.25c-.557 0-1.014.49-1.058 1.113l-.004.099h2.124c0-.67-.475-1.212-1.062-1.212z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconsDelete3Icon;
/* prettier-ignore-end */
