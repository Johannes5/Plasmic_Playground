// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CheckmarkCirclesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CheckmarkCirclesvgIcon(props: CheckmarkCirclesvgIconProps) {
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
          "M13.097 7.477l-3.37 4.425-1.455-1.857a.89.89 0 10-1.403 1.097l2.165 2.767c.17.215.428.341.702.341h.006a.885.885 0 00.702-.35l4.07-5.345a.89.89 0 10-1.417-1.078m-2.41 10.336c-3.928 0-7.124-3.196-7.124-7.125 0-3.928 3.196-7.125 7.124-7.125 3.929 0 7.126 3.197 7.126 7.125 0 3.929-3.197 7.125-7.125 7.125m0-16.032a8.907 8.907 0 100 17.814 8.907 8.907 0 000-17.814"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CheckmarkCirclesvgIcon;
/* prettier-ignore-end */
