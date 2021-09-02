// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconcheckmarkCircle2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconcheckmarkCircle2Icon(props: IconcheckmarkCircle2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 22"}
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
          "M13.097 7.476l-3.37 4.426-1.455-1.858a.89.89 0 10-1.403 1.097l2.165 2.768c.17.215.428.34.702.34h.007a.88.88 0 00.701-.35l4.07-5.344a.89.89 0 10-1.417-1.079m-2.41 10.337c-3.928 0-7.125-3.197-7.125-7.125 0-3.929 3.197-7.125 7.125-7.125a7.133 7.133 0 017.125 7.125c0 3.928-3.196 7.125-7.125 7.125m0-16.032a8.907 8.907 0 10.001 17.813 8.907 8.907 0 000-17.813"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconcheckmarkCircle2Icon;
/* prettier-ignore-end */
