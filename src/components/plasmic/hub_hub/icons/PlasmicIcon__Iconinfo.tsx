// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconinfoIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconinfoIcon(props: IconinfoIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 7"}
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
          "M3.208 2.333a.292.292 0 11.584 0 .292.292 0 01-.584 0zm0 .875a.292.292 0 01.584 0v1.458a.292.292 0 01-.584 0V3.208zM3.5 5.833A2.336 2.336 0 011.167 3.5 2.336 2.336 0 013.5 1.167 2.336 2.336 0 015.833 3.5 2.336 2.336 0 013.5 5.833m0-5.25a2.917 2.917 0 100 5.833 2.917 2.917 0 000-5.833"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconinfoIcon;
/* prettier-ignore-end */
