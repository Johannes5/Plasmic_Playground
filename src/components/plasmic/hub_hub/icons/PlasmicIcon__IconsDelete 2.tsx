// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconsDeleteIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconsDeleteIcon(props: IconsDeleteIconProps) {
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
          "M9 1.313c1.3 0 2.362 1.017 2.434 2.299l.004.138h3.937a.562.562 0 01.076 1.12l-.076.005h-.597l-.96 9.764a2.063 2.063 0 01-1.921 1.857l-.132.004h-5.53a2.063 2.063 0 01-2.036-1.73l-.017-.13-.96-9.765h-.597a.563.563 0 01-.557-.486l-.006-.077c0-.284.212-.52.487-.557l.076-.005h3.938A2.438 2.438 0 019 1.312zm4.648 3.562H4.352l.95 9.654a.938.938 0 00.837.841l.096.005h5.53a.94.94 0 00.92-.751l.013-.095.95-9.654zm-3.335 2.063c.284 0 .52.211.557.486l.005.076v5.25a.562.562 0 01-1.12.076l-.005-.076V7.5c0-.31.252-.563.563-.563zm-2.626 0c.285 0 .52.211.558.486l.005.076v5.25a.562.562 0 01-1.12.076l-.005-.076V7.5c0-.31.252-.563.563-.563zM9 2.438c-.689 0-1.253.53-1.308 1.204l-.005.108h2.625c0-.725-.587-1.313-1.312-1.313z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconsDeleteIcon;
/* prettier-ignore-end */
