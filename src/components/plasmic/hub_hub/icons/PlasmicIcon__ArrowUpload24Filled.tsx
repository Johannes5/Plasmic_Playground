// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowUpload24FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowUpload24FilledIcon(props: ArrowUpload24FilledIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 15"}
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
          "M3.225 12.593h8.291a.46.46 0 01.063.917l-.063.004h-8.29a.46.46 0 01-.063-.917l.062-.004h8.291-8.29zm.64-8.115l3.07-3.07a.614.614 0 01.811-.05l.058.05 3.074 3.07a.614.614 0 01-.81.92l-.058-.051-2.025-2.022v7.732a.614.614 0 01-.543.61l-.071.004a.614.614 0 01-.61-.542l-.004-.072V3.324L4.734 5.347a.614.614 0 01-.81.05l-.058-.05a.614.614 0 01-.051-.811l.05-.058 3.07-3.07-3.07 3.07z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowUpload24FilledIcon;
/* prettier-ignore-end */
