// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconsSourcesSavedForLaterIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconsSourcesSavedForLaterIcon(
  props: IconsSourcesSavedForLaterIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
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
          "M11.423.781c1.945.822 3.303 2.222 4.013 4.11 1.605 4.23-.309 8.552-4.569 10.348-1.667.7-4.57.609-6.144-.183l-1.296-.639-.618.792-.617.791-.309-.7c-.154-.396-.556-1.522-.926-2.496L.34 11.069h2.408c1.327 0 2.5.091 2.593.183.092.121 0 .487-.247.852-.648.883-.618.944.772 1.552 2.716 1.218 6.205-.152 7.687-3.013 1.698-3.318.278-7.123-3.18-8.523-1.667-.67-3.149-.609-5.001.244-1.822.822-2.871 2.13-3.396 4.109-.278 1.187-.463 1.43-1.173 1.491-.71.092-.803 0-.803-.791 0-1.492 1.852-4.627 3.303-5.631C5.804-.223 8.521-.467 11.423.78zm-2.47 4.353v1.978h1.852c1.76 0 1.853.03 1.853.761 0 .761-.031.761-2.594.761-3.025 0-2.963.06-2.963-3.226V3.155h1.852v1.979z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconsSourcesSavedForLaterIcon;
/* prettier-ignore-end */
