// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconIcon(props: IconIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 75 75"}
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

      <g filter={"url(#PTBenxQ4Ta)"}>
        <g filter={"url(#PTBenxQ4Tb)"}>
          <path
            d={
              "M20 23.933v27.084c0 3.656 3.859 6.026 7.12 4.373l26.15-13.26a4.903 4.903 0 002.686-4.373v-.749a4.903 4.903 0 00-2.71-4.385l-26.15-13.075c-3.26-1.63-7.096.74-7.096 4.385z"
            }
            fill={"currentColor"}
          ></path>
        </g>
      </g>

      <defs>
        <filter
          id={"PTBenxQ4Ta"}
          x={"12"}
          y={"10"}
          width={"51.956"}
          height={"59"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feColorMatrix
            in={"SourceAlpha"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
          ></feColorMatrix>

          <feOffset dy={"2"}></feOffset>

          <feGaussianBlur stdDeviation={"4"}></feGaussianBlur>

          <feColorMatrix
            values={
              "0 0 0 0 0.348194 0 0 0 0 0.469498 0 0 0 0 0.908333 0 0 0 0.8 0"
            }
          ></feColorMatrix>

          <feBlend
            in2={"BackgroundImageFix"}
            result={"effect1_dropShadow"}
          ></feBlend>

          <feBlend
            in={"SourceGraphic"}
            in2={"effect1_dropShadow"}
            result={"shape"}
          ></feBlend>
        </filter>

        <filter
          id={"PTBenxQ4Tb"}
          x={"14"}
          y={"15.024"}
          width={"47.956"}
          height={"48.902"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feColorMatrix
            in={"SourceAlpha"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
          ></feColorMatrix>

          <feOffset dy={"2"}></feOffset>

          <feGaussianBlur stdDeviation={"3"}></feGaussianBlur>

          <feColorMatrix
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}
          ></feColorMatrix>

          <feBlend
            in2={"BackgroundImageFix"}
            result={"effect1_dropShadow"}
          ></feBlend>

          <feBlend
            in={"SourceGraphic"}
            in2={"effect1_dropShadow"}
            result={"shape"}
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default IconIcon;
/* prettier-ignore-end */
