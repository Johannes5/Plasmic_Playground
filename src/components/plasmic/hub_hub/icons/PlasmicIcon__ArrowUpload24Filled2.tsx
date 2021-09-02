// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowUpload24Filled2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowUpload24Filled2Icon(props: ArrowUpload24Filled2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 19"}
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
          "M3.944 15.4h10.14a.563.563 0 01.077 1.123l-.076.005H3.944a.563.563 0 01-.077-1.122l.076-.005h10.14-10.14zm.784-9.924l3.754-3.753a.751.751 0 01.992-.063l.07.062 3.76 3.754a.751.751 0 01-.992 1.126l-.07-.063-2.476-2.472v9.456c0 .385-.29.703-.664.746l-.088.005a.751.751 0 01-.746-.664l-.005-.087.001-9.458L5.79 6.54a.751.751 0 01-.992.062l-.07-.062a.751.751 0 01-.063-.992l.063-.07 3.754-3.754-3.754 3.753z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowUpload24Filled2Icon;
/* prettier-ignore-end */
