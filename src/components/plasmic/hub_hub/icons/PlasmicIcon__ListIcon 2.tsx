// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ListIconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ListIconIcon(props: ListIconIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 9"}
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
          "M.636 0a.636.636 0 000 1.273h10.182a.636.636 0 000-1.273H.636zm0 2.545a.636.636 0 100 1.273h10.182a.636.636 0 000-1.273H.636zM0 5.727c0-.351.285-.636.636-.636h10.182a.636.636 0 010 1.273H.636A.636.636 0 010 5.727zm.636 1.91a.636.636 0 000 1.272h10.182a.636.636 0 000-1.273H.636z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ListIconIcon;
/* prettier-ignore-end */
