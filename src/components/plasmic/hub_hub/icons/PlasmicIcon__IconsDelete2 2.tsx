// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconsDelete2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconsDelete2Icon(props: IconsDelete2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 12"}
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
          "M4.855.808c.701 0 1.274.626 1.313 1.416l.002.085h2.124c.167 0 .303.155.303.346 0 .175-.114.32-.262.343l-.041.003h-.322l-.518 6.012c-.054.623-.496 1.104-1.036 1.143l-.071.002H3.363c-.548 0-1.01-.455-1.098-1.065l-.009-.08L1.738 3h-.322c-.154 0-.28-.13-.3-.3l-.003-.046c0-.175.114-.32.262-.343l.041-.003H3.54c0-.83.589-1.501 1.315-1.501zm2.507 2.193H2.347l.513 5.944c.024.276.215.49.452.518l.051.002h2.984c.242 0 .448-.196.495-.462l.008-.058L7.362 3zm-1.8 1.27c.155 0 .282.13.302.3l.002.046V7.85c0 .192-.135.347-.303.347-.154 0-.28-.13-.3-.3L5.26 7.85V4.617c0-.19.135-.346.303-.346zm-1.415 0c.154 0 .28.13.3.3l.003.046V7.85c0 .192-.135.347-.303.347-.154 0-.28-.13-.3-.3l-.004-.047V4.617c0-.19.136-.346.304-.346zm.708-2.77c-.372 0-.676.326-.706.741l-.002.067h1.416c0-.447-.317-.808-.708-.808z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconsDelete2Icon;
/* prettier-ignore-end */
