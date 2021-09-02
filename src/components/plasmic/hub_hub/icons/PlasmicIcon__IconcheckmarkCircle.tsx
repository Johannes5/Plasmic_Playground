// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconcheckmarkCircleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconcheckmarkCircleIcon(props: IconcheckmarkCircleIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 27 27"}
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
          "M16.017 9.144l-4.122 5.412-1.778-2.272a1.088 1.088 0 00-1.53-.187 1.088 1.088 0 00-.186 1.529l2.648 3.384c.207.263.523.417.858.417h.008a1.08 1.08 0 00.858-.43l4.977-6.534a1.088 1.088 0 10-1.733-1.32M13.07 21.785c-4.804 0-8.713-3.909-8.713-8.713 0-4.805 3.909-8.714 8.713-8.714 4.805 0 8.714 3.91 8.714 8.714s-3.91 8.713-8.714 8.713m0-19.606c-6.015 0-10.892 4.878-10.892 10.892 0 6.015 4.877 10.892 10.892 10.892 6.016 0 10.893-4.877 10.893-10.892 0-6.014-4.877-10.892-10.893-10.892"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconcheckmarkCircleIcon;
/* prettier-ignore-end */
