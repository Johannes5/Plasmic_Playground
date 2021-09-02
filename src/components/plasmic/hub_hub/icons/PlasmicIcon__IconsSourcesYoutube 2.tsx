// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconsSourcesYoutubeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconsSourcesYoutubeIcon(props: IconsSourcesYoutubeIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 10"}
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
          "M2.415.08C1.114.182.59.488.242 1.354.04 1.864 0 2.386 0 5.062c0 2.969.013 3.147.295 3.695.456.867.859 1.032 2.845 1.173 2.066.152 9.539.038 10.263-.166C14.718 9.407 15 8.54 15 4.934c0-3.453-.201-4.14-1.382-4.714-.376-.191-9.27-.306-11.203-.14zM8.09 3.788c1.047.522 1.906.98 1.906 1.02 0 .088-3.838 2.038-4.012 2.038-.094 0-.148-.7-.148-2.052 0-1.643.04-2.038.175-2 .107.025 1.033.471 2.08.994z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconsSourcesYoutubeIcon;
/* prettier-ignore-end */
