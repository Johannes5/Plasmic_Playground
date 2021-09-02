// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SmallLogoDarkModesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SmallLogoDarkModesvgIcon(props: SmallLogoDarkModesvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 28"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#eQ5WdGy_da)"} fill={"#FDFBF7"}>
        <path
          d={
            "M13.482 9.28c0-.332.183-.635.477-.789l4.74-2.478A.889.889 0 0120 6.801v16.66a.889.889 0 01-.477.788l-4.74 2.479a.889.889 0 01-1.301-.788V9.28zm-2.964-7.812a.889.889 0 00-1.3-.788l-4.74 2.478A.889.889 0 004 3.946V9.38a.89.89 0 00.487.793l4.74 2.404a.889.889 0 001.291-.793V1.468z"
          }
        ></path>
      </g>

      <g filter={"url(#eQ5WdGy_db)"}>
        <path
          d={
            "M4 15.512v4.91c0 .663.7 1.093 1.29.793l4.742-2.404a.89.89 0 00.486-.792v-.136a.889.889 0 00-.49-.795l-4.742-2.37A.889.889 0 004 15.511z"
          }
          fill={"#4062DD"}
        ></path>
      </g>

      <defs>
        <filter
          id={"eQ5WdGy_da"}
          x={"4"}
          y={".578"}
          width={"17.054"}
          height={"27.306"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feBlend
            mode={"normal"}
            in={"SourceGraphic"}
            in2={"BackgroundImageFix"}
            result={"shape"}
          ></feBlend>

          <feColorMatrix
            in={"SourceAlpha"}
            type={"matrix"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
            result={"hardAlpha"}
          ></feColorMatrix>

          <feOffset dx={"1.054"}></feOffset>

          <feGaussianBlur stdDeviation={".527"}></feGaussianBlur>

          <feComposite
            in2={"hardAlpha"}
            operator={"arithmetic"}
            k2={"-1"}
            k3={"1"}
          ></feComposite>

          <feColorMatrix
            type={"matrix"}
            values={"0 0 0 0 0.175 0 0 0 0 0.175 0 0 0 0 0.175 0 0 0 0.8 0"}
          ></feColorMatrix>

          <feBlend
            mode={"normal"}
            in2={"shape"}
            result={"effect1_innerShadow"}
          ></feBlend>

          <feColorMatrix
            in={"SourceAlpha"}
            type={"matrix"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
            result={"hardAlpha"}
          ></feColorMatrix>

          <feOffset dy={"1.054"}></feOffset>

          <feGaussianBlur stdDeviation={".527"}></feGaussianBlur>

          <feComposite
            in2={"hardAlpha"}
            operator={"arithmetic"}
            k2={"-1"}
            k3={"1"}
          ></feComposite>

          <feColorMatrix
            type={"matrix"}
            values={
              "0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0"
            }
          ></feColorMatrix>

          <feBlend
            mode={"normal"}
            in2={"effect1_innerShadow"}
            result={"effect2_innerShadow"}
          ></feBlend>
        </filter>

        <filter
          id={"eQ5WdGy_db"}
          x={"0"}
          y={"10.623"}
          width={"14.518"}
          height={"14.69"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feColorMatrix
            in={"SourceAlpha"}
            type={"matrix"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
            result={"hardAlpha"}
          ></feColorMatrix>

          <feOffset></feOffset>

          <feGaussianBlur stdDeviation={"2"}></feGaussianBlur>

          <feComposite in2={"hardAlpha"} operator={"out"}></feComposite>

          <feColorMatrix
            type={"matrix"}
            values={
              "0 0 0 0 0.249167 0 0 0 0 0.385017 0 0 0 0 0.866667 0 0 0 0.85 0"
            }
          ></feColorMatrix>

          <feBlend
            mode={"normal"}
            in2={"BackgroundImageFix"}
            result={"effect1_dropShadow"}
          ></feBlend>

          <feBlend
            mode={"normal"}
            in={"SourceGraphic"}
            in2={"effect1_dropShadow"}
            result={"shape"}
          ></feBlend>

          <feColorMatrix
            in={"SourceAlpha"}
            type={"matrix"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
            result={"hardAlpha"}
          ></feColorMatrix>

          <feOffset dx={".632"}></feOffset>

          <feGaussianBlur stdDeviation={"1.054"}></feGaussianBlur>

          <feComposite
            in2={"hardAlpha"}
            operator={"arithmetic"}
            k2={"-1"}
            k3={"1"}
          ></feComposite>

          <feColorMatrix
            type={"matrix"}
            values={
              "0 0 0 0 0.142604 0 0 0 0 0.178495 0 0 0 0 0.308333 0 0 0 1 0"
            }
          ></feColorMatrix>

          <feBlend
            mode={"normal"}
            in2={"shape"}
            result={"effect2_innerShadow"}
          ></feBlend>

          <feColorMatrix
            in={"SourceAlpha"}
            type={"matrix"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
            result={"hardAlpha"}
          ></feColorMatrix>

          <feOffset dy={"1.054"}></feOffset>

          <feGaussianBlur stdDeviation={".316"}></feGaussianBlur>

          <feComposite
            in2={"hardAlpha"}
            operator={"arithmetic"}
            k2={"-1"}
            k3={"1"}
          ></feComposite>

          <feColorMatrix
            type={"matrix"}
            values={
              "0 0 0 0 0.356823 0 0 0 0 0.478965 0 0 0 0 0.920833 0 0 0 0.5 0"
            }
          ></feColorMatrix>

          <feBlend
            mode={"normal"}
            in2={"effect2_innerShadow"}
            result={"effect3_innerShadow"}
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default SmallLogoDarkModesvgIcon;
/* prettier-ignore-end */
