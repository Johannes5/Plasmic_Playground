// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _27IconheartFillIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _27IconheartFillIcon(props: _27IconheartFillIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 8"}
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
          "M3.772 6.888a.307.307 0 01-.223-.097L1.108 4.24a1.774 1.774 0 010-2.426 1.597 1.597 0 012.323 0l.34.356.341-.356a1.597 1.597 0 012.323 0c.64.669.64 1.757 0 2.426l-2.44 2.552a.308.308 0 01-.223.097"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _27IconheartFillIcon;
/* prettier-ignore-end */
