// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RadioButtonOffsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RadioButtonOffsvgIcon(props: RadioButtonOffsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 22"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M10.688 3.563c-3.93 0-7.126 3.197-7.126 7.125 0 3.929 3.197 7.125 7.126 7.125 3.928 0 7.124-3.196 7.124-7.125 0-3.928-3.196-7.125-7.125-7.125m0 16.03c-4.91 0-8.906-3.995-8.906-8.905 0-4.911 3.996-8.907 8.906-8.907 4.911 0 8.907 3.996 8.907 8.906 0 4.911-3.996 8.907-8.907 8.907"
        }
        fill={"#4062DD"}
        fillOpacity={".85"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M10.688 3.563c-3.93 0-7.126 3.197-7.126 7.125 0 3.929 3.197 7.125 7.126 7.125 3.928 0 7.124-3.196 7.124-7.125 0-3.928-3.196-7.125-7.125-7.125m0 16.03c-4.91 0-8.906-3.995-8.906-8.905 0-4.911 3.996-8.907 8.906-8.907 4.911 0 8.907 3.996 8.907 8.906 0 4.911-3.996 8.907-8.907 8.907"
        }
        fill={"#5978E8"}
      ></path>
    </svg>
  );
}

export default RadioButtonOffsvgIcon;
/* prettier-ignore-end */
