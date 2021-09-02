// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SwitchCircleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SwitchCircleIcon(props: SwitchCircleIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
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

      <circle cx={"7"} cy={"7"} r={"7"} fill={"currentColor"}></circle>
    </svg>
  );
}

export default SwitchCircleIcon;
/* prettier-ignore-end */
