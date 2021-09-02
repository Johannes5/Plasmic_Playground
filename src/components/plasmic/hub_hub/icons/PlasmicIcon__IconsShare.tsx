// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconsShareIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconsShareIcon(props: IconsShareIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
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
          "M14.816 8.25c.284 0 .52.212.557.486l.005.076v5.251c0 1.3-1.017 2.362-2.299 2.434l-.138.004H4.69a2.438 2.438 0 01-2.434-2.3l-.004-.138v-5.25a.563.563 0 011.12-.077l.005.076v5.251c0 .689.53 1.253 1.205 1.308l.108.005h8.25c.688 0 1.253-.53 1.308-1.205l.004-.108v-5.25c0-.311.252-.563.563-.563zM4.665 5.412l3.747-3.747c.2-.2.512-.218.732-.055l.063.054 3.754 3.748a.562.562 0 01-.732.85l-.063-.054-2.792-2.787v8.77c0 .285-.211.52-.486.558l-.076.005a.563.563 0 01-.558-.486l-.005-.077V3.418L5.46 6.208c-.2.2-.512.218-.732.054l-.063-.054a.563.563 0 01-.055-.733l.055-.063 3.747-3.747-3.747 3.747z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconsShareIcon;
/* prettier-ignore-end */
