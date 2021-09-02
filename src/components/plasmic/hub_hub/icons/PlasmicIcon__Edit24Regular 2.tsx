// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Edit24RegularIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Edit24RegularIcon(props: Edit24RegularIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 19"}
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
          "M16.649 2.351a2.833 2.833 0 010 4.006l-9.475 9.475a1.78 1.78 0 01-.79.46l-4.05 1.104a.594.594 0 01-.73-.73l1.105-4.05c.081-.298.24-.57.459-.79l9.475-9.475a2.833 2.833 0 014.006 0zm-4.774 2.447l-7.868 7.868a.594.594 0 00-.153.263l-.83 3.048 3.047-.831c.1-.028.19-.08.263-.153l7.868-7.868-2.327-2.327zm1.607-1.607l-.768.767 2.327 2.327.768-.767a1.645 1.645 0 10-2.327-2.327z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Edit24RegularIcon;
/* prettier-ignore-end */
