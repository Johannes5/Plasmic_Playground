// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ThumbLike24RegularIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ThumbLike24RegularIcon(props: ThumbLike24RegularIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 15"}
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
          "M9.9 3.121C9.9 1.656 9.218.602 8.098.602c-.616 0-.827.361-1.048 1.2-.045.173-.067.258-.09.34-.061.216-.166.582-.317 1.1a.15.15 0 01-.017.038l-1.72 2.692a3.53 3.53 0 01-1.713 1.396l-.284.108a1.65 1.65 0 00-1.03 1.855l.243 1.252a1.95 1.95 0 001.45 1.523l4.577 1.121a2.85 2.85 0 003.44-2.063l.849-3.33a1.95 1.95 0 00-1.89-2.432H9.453c.298-.98.448-1.735.448-2.28zm-7.138 6.04a.75.75 0 01.468-.844l.284-.109a4.43 4.43 0 002.15-1.752l1.72-2.691a1.05 1.05 0 00.123-.273c.15-.519.257-.887.318-1.105.026-.092.05-.186.095-.356.114-.433.17-.529.177-.529.52 0 .904.59.904 1.62 0 .53-.196 1.4-.59 2.588a.45.45 0 00.427.592h1.71a1.05 1.05 0 011.017 1.31l-.85 3.33a1.95 1.95 0 01-2.353 1.411l-4.577-1.121a1.05 1.05 0 01-.78-.82L2.761 9.16z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ThumbLike24RegularIcon;
/* prettier-ignore-end */
