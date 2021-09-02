// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ColorIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ColorIcon(props: ColorIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 13"}
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
          "M8.469 10.262c0 1.476-.72 2.538-1.897 2.538-.615 0-.847-.328-1.067-1.085l-.13-.467c-.064-.217-.175-.586-.333-1.106a.146.146 0 00-.018-.04l-1.81-2.71a3.685 3.685 0 00-1.8-1.407l-.299-.11C.328 5.588-.128 4.8.032 4.009l.255-1.261c.152-.753.748-1.352 1.525-1.534L6.625.083c1.598-.375 3.212.553 3.618 2.079l.893 3.354c.28 1.05-.383 2.12-1.48 2.388-.166.04-.336.061-.507.061h-1.15c.312.987.47 1.748.47 2.297zM.96 4.18a.75.75 0 00.492.85l.3.109c.93.341 1.722.96 2.26 1.764L5.82 9.614c.057.085.1.178.13.275l.348 1.16.134.479c.088.295.132.365.139.365.547 0 .95-.594.95-1.63 0-.535-.205-1.412-.62-2.608-.102-.294.126-.596.449-.596h1.798c.092 0 .183-.011.273-.033.59-.145.947-.72.797-1.286l-.893-3.354C9.048 1.342 7.943.707 6.851.964l-4.813 1.13c-.419.098-.74.42-.822.825L.961 4.18z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ColorIcon;
/* prettier-ignore-end */
