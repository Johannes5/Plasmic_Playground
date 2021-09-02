// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconsReadAloudIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconsReadAloudIcon(props: IconsReadAloudIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
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
          "M11.066 11.25c.931 0 1.686.755 1.686 1.687v.431c0 .67-.24 1.32-.676 1.83C10.9 16.571 9.11 17.25 6.75 17.25c-2.36 0-4.149-.68-5.324-2.055a2.813 2.813 0 01-.673-1.826v-.433c0-.932.755-1.687 1.686-1.687h8.627zm0 1.125H2.439a.562.562 0 00-.561.562v.433c0 .402.143.79.404 1.096.94 1.1 2.414 1.66 4.468 1.66s3.53-.56 4.472-1.66c.261-.306.405-.695.405-1.098v-.431a.562.562 0 00-.561-.562zM14.29 1.053a.562.562 0 01.768.209A9.52 9.52 0 0116.313 6a9.52 9.52 0 01-1.263 4.752.562.562 0 01-.976-.56A8.396 8.396 0 0015.188 6a8.396 8.396 0 00-1.107-4.18.562.562 0 01.21-.767zm-7.54 1.2a3.75 3.75 0 110 7.5 3.75 3.75 0 010-7.5zm4.941.297a.563.563 0 01.767.21c.557.98.854 2.089.854 3.24a6.534 6.534 0 01-.857 3.246.563.563 0 01-.978-.557A5.41 5.41 0 0012.187 6a5.41 5.41 0 00-.707-2.683.563.563 0 01.211-.767zm-4.941.828a2.625 2.625 0 100 5.25 2.625 2.625 0 000-5.25z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconsReadAloudIcon;
/* prettier-ignore-end */
