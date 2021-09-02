// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group71IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group71Icon(props: Group71IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 22"}
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

      <circle
        cx={"2.226"}
        cy={"19.774"}
        r={"2.226"}
        fill={"currentColor"}
      ></circle>

      <circle cx={"2.226"} cy={"11"} r={"2.226"} fill={"currentColor"}></circle>

      <circle
        cx={"2.226"}
        cy={"2.226"}
        r={"2.226"}
        fill={"currentColor"}
      ></circle>
    </svg>
  );
}

export default Group71Icon;
/* prettier-ignore-end */
