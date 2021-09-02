// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UnionIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function UnionIcon(props: UnionIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 27 31"}
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
          "M2.074 4.813a2.8 2.8 0 00-.269 2.756l.033.072c.156.349.378.665.654.93l3.877 3.716c.385.37.95.483 1.448.292l.041-.016a1.276 1.276 0 00.427-2.113L5.796 8.064h7.773c1.14.058 2.269.3 3.337.718a10.176 10.176 0 014.616 3.603 9.545 9.545 0 011.751 5.453 9.54 9.54 0 01-1.705 5.467 10.166 10.166 0 01-4.585 3.638c-1.87.752-3.93.954-5.921.583a10.4 10.4 0 01-5.26-2.67 9.802 9.802 0 01-2.334-3.412c-.352-.867-1.23-1.466-2.148-1.287-.94.183-1.557 1.106-1.233 2.007a13.056 13.056 0 003.297 5.029 13.882 13.882 0 007.022 3.563c2.657.496 5.407.225 7.903-.777 2.497-1.003 4.627-2.693 6.121-4.856a12.734 12.734 0 002.276-7.298 12.74 12.74 0 00-2.337-7.28c-1.513-2.152-3.657-3.825-6.162-4.808a14.204 14.204 0 00-5.436-.976.873.873 0 00-.063-.003H5.632l2.653-2.543A1.276 1.276 0 007.858.102L7.827.09a1.355 1.355 0 00-1.449.313L2.37 4.459a2.799 2.799 0 00-.257.3h-.04v.054z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default UnionIcon;
/* prettier-ignore-end */
