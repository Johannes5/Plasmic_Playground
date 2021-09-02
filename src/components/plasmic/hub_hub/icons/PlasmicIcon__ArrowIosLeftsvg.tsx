// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowIosLeftsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowIosLeftsvgIcon(props: ArrowIosLeftsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 13"}
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
          "M9.033 9.81a.73.73 0 01-.51-.192L5.37 6.52a.436.436 0 01.007-.654l3.266-3.098c.23-.22.643-.249.92-.066.277.182.314.508.083.727L6.723 6.202 9.542 8.97c.226.222.181.548-.1.726a.762.762 0 01-.41.114"
        }
        fill={"currentColor"}
        fillOpacity={".5"}
      ></path>
    </svg>
  );
}

export default ArrowIosLeftsvgIcon;
/* prettier-ignore-end */
