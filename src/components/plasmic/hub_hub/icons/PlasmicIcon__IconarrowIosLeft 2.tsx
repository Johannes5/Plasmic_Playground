// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconarrowIosLeftIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconarrowIosLeftIcon(props: IconarrowIosLeftIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 21"}
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
          "M12.1 16.625a.873.873 0 01-.682-.326l-4.225-5.25a.875.875 0 01.01-1.109l4.375-5.25a.874.874 0 111.344 1.12l-3.916 4.7 3.776 4.691a.875.875 0 01-.682 1.424"
        }
        fill={"currentColor"}
        fillOpacity={".5"}
      ></path>
    </svg>
  );
}

export default IconarrowIosLeftIcon;
/* prettier-ignore-end */
