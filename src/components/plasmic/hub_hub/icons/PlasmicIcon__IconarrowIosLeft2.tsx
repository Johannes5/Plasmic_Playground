// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconarrowIosLeft2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconarrowIosLeft2Icon(props: IconarrowIosLeft2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 33 36"}
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
          "M17.841 23.556a.92.92 0 01-.718-.344l-4.448-5.527a.922.922 0 01.01-1.167l4.606-5.528a.92.92 0 111.415 1.18l-4.122 4.947 3.975 4.94a.92.92 0 01-.718 1.499"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconarrowIosLeft2Icon;
/* prettier-ignore-end */
