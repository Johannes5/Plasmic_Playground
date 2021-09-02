// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowIosRightsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowIosRightsvgIcon(props: ArrowIosRightsvgIconProps) {
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
          "M6.644 2.581c.19 0 .38.066.51.193l3.153 3.098a.436.436 0 01-.007.654L7.034 9.624c-.23.22-.643.249-.92.066-.277-.182-.315-.508-.083-.727L8.954 6.19 6.135 3.422c-.226-.222-.182-.548.1-.726a.762.762 0 01.409-.115"
        }
        fill={"currentColor"}
        fillOpacity={".5"}
      ></path>
    </svg>
  );
}

export default ArrowIosRightsvgIcon;
/* prettier-ignore-end */
