// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 24qDGfvb2rMn6oy8PVF95d
// Component: ZGG_R4GfwA
import * as React from "react";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_hub_hub.module.css"; // plasmic-import: 24qDGfvb2rMn6oy8PVF95d/projectcss
import * as sty from "./PlasmicBottomPlayer.module.css"; // plasmic-import: ZGG_R4GfwA/css

import SubtractIcon from "./icons/PlasmicIcon__Subtract"; // plasmic-import: Sfcm65DgD/icon
import UnionIcon from "./icons/PlasmicIcon__Union"; // plasmic-import: rSNS-_lguR/icon
import IconsLogoBig2Icon from "./icons/PlasmicIcon__IconsLogoBig2"; // plasmic-import: RtbAac0rtR/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: AT3FV2mrkF/icon
import MenuIcon2Icon from "./icons/PlasmicIcon__MenuIcon2"; // plasmic-import: nMStdnbbxHY/icon
import blueDotsIWxOdFLc from "./images/blueDots.svg"; // plasmic-import: i-WXOdF-lc/picture

export type PlasmicBottomPlayer__VariantMembers = {
  play: "play";
};

export type PlasmicBottomPlayer__VariantsArgs = {
  play?: SingleBooleanChoiceArg<"play">;
};

type VariantPropType = keyof PlasmicBottomPlayer__VariantsArgs;
export const PlasmicBottomPlayer__VariantProps = new Array<VariantPropType>(
  "play"
);

export type PlasmicBottomPlayer__ArgsType = {};
type ArgPropType = keyof PlasmicBottomPlayer__ArgsType;
export const PlasmicBottomPlayer__ArgProps = new Array<ArgPropType>();

export type PlasmicBottomPlayer__OverridesType = {
  root?: p.Flex<"div">;
  property1Default?: p.Flex<"div">;
  rectangle1496?: p.Flex<"div">;
  frame204?: p.Flex<"div">;
  frame206?: p.Flex<"div">;
  iconsSpeed?: p.Flex<"div">;
  img?: p.Flex<"img">;
  frame201?: p.Flex<"div">;
  iconsBackward?: p.Flex<"div">;
  frame205?: p.Flex<"div">;
  iconsForward?: p.Flex<"div">;
  frame207?: p.Flex<"div">;
  menuIconSmall?: p.Flex<"div">;
};

export interface DefaultBottomPlayerProps {
  play?: SingleBooleanChoiceArg<"play">;
  className?: string;
}

function PlasmicBottomPlayer__RenderFunc(props: {
  variants: PlasmicBottomPlayer__VariantsArgs;
  args: PlasmicBottomPlayer__ArgsType;
  overrides: PlasmicBottomPlayer__OverridesType;
  dataFetches?: PlasmicBottomPlayer__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__play]: hasVariant(variants, "play", "play")
      })}
    >
      <div
        data-plasmic-name={"property1Default"}
        data-plasmic-override={overrides.property1Default}
        className={classNames(defaultcss.all, sty.property1Default, {
          [sty.property1Default__play]: hasVariant(variants, "play", "play")
        })}
      >
        <div
          data-plasmic-name={"rectangle1496"}
          data-plasmic-override={overrides.rectangle1496}
          className={classNames(defaultcss.all, sty.rectangle1496)}
        />

        <p.Stack
          as={"div"}
          data-plasmic-name={"frame204"}
          data-plasmic-override={overrides.frame204}
          hasGap={true}
          className={classNames(defaultcss.all, sty.frame204, {
            [sty.frame204__play]: hasVariant(variants, "play", "play")
          })}
        >
          <div
            data-plasmic-name={"frame206"}
            data-plasmic-override={overrides.frame206}
            className={classNames(defaultcss.all, sty.frame206)}
          >
            <div
              data-plasmic-name={"iconsSpeed"}
              data-plasmic-override={overrides.iconsSpeed}
              className={classNames(defaultcss.all, sty.iconsSpeed)}
            >
              <SubtractIcon
                className={classNames(defaultcss.all, sty.svg___98FMr)}
                role={"img"}
              />

              <img
                data-plasmic-name={"img"}
                data-plasmic-override={overrides.img}
                alt={""}
                className={classNames(defaultcss.img, sty.img)}
                role={"img"}
                src={blueDotsIWxOdFLc}
              />
            </div>
          </div>

          <p.Stack
            as={"div"}
            data-plasmic-name={"frame201"}
            data-plasmic-override={overrides.frame201}
            hasGap={true}
            className={classNames(defaultcss.all, sty.frame201)}
          >
            <div
              data-plasmic-name={"iconsBackward"}
              data-plasmic-override={overrides.iconsBackward}
              className={classNames(defaultcss.all, sty.iconsBackward)}
            >
              <UnionIcon
                className={classNames(defaultcss.all, sty.svg__p6LnP)}
                role={"img"}
              />

              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.freeBox__okNrj
                )}
              >
                {"15"}
              </div>
            </div>

            <div
              data-plasmic-name={"frame205"}
              data-plasmic-override={overrides.frame205}
              className={classNames(defaultcss.all, sty.frame205, {
                [sty.frame205__play]: hasVariant(variants, "play", "play")
              })}
            >
              {(hasVariant(variants, "play", "play") ? true : false) ? (
                <IconsLogoBig2Icon
                  className={classNames(defaultcss.all, sty.svg__tMrq, {
                    [sty.svg__play__tMrqJbOs]: hasVariant(
                      variants,
                      "play",
                      "play"
                    )
                  })}
                  role={"img"}
                />
              ) : null}
              {(hasVariant(variants, "play", "play") ? false : true) ? (
                <Icon2Icon
                  className={classNames(defaultcss.all, sty.svg__qyDg, {
                    [sty.svg__play__qyDgJbOs]: hasVariant(
                      variants,
                      "play",
                      "play"
                    )
                  })}
                  role={"img"}
                />
              ) : null}
            </div>

            <div
              data-plasmic-name={"iconsForward"}
              data-plasmic-override={overrides.iconsForward}
              className={classNames(defaultcss.all, sty.iconsForward)}
            >
              <UnionIcon
                className={classNames(defaultcss.all, sty.svg___2Dags)}
                role={"img"}
              />

              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.freeBox___6HCMl
                )}
              >
                {"30"}
              </div>
            </div>
          </p.Stack>

          <div
            data-plasmic-name={"frame207"}
            data-plasmic-override={overrides.frame207}
            className={classNames(defaultcss.all, sty.frame207)}
          >
            <div
              data-plasmic-name={"menuIconSmall"}
              data-plasmic-override={overrides.menuIconSmall}
              className={classNames(defaultcss.all, sty.menuIconSmall)}
            >
              <MenuIcon2Icon
                className={classNames(defaultcss.all, sty.svg__pb8Pk)}
                role={"img"}
              />
            </div>
          </div>
        </p.Stack>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "property1Default",
    "rectangle1496",
    "frame204",
    "frame206",
    "iconsSpeed",
    "img",
    "frame201",
    "iconsBackward",
    "frame205",
    "iconsForward",
    "frame207",
    "menuIconSmall"
  ],
  property1Default: [
    "property1Default",
    "rectangle1496",
    "frame204",
    "frame206",
    "iconsSpeed",
    "img",
    "frame201",
    "iconsBackward",
    "frame205",
    "iconsForward",
    "frame207",
    "menuIconSmall"
  ],
  rectangle1496: ["rectangle1496"],
  frame204: [
    "frame204",
    "frame206",
    "iconsSpeed",
    "img",
    "frame201",
    "iconsBackward",
    "frame205",
    "iconsForward",
    "frame207",
    "menuIconSmall"
  ],
  frame206: ["frame206", "iconsSpeed", "img"],
  iconsSpeed: ["iconsSpeed", "img"],
  img: ["img"],
  frame201: ["frame201", "iconsBackward", "frame205", "iconsForward"],
  iconsBackward: ["iconsBackward"],
  frame205: ["frame205"],
  iconsForward: ["iconsForward"],
  frame207: ["frame207", "menuIconSmall"],
  menuIconSmall: ["menuIconSmall"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  property1Default: "div";
  rectangle1496: "div";
  frame204: "div";
  frame206: "div";
  iconsSpeed: "div";
  img: "img";
  frame201: "div";
  iconsBackward: "div";
  frame205: "div";
  iconsForward: "div";
  frame207: "div";
  menuIconSmall: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBottomPlayer__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBottomPlayer__VariantsArgs;
    args?: PlasmicBottomPlayer__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicBottomPlayer__Fetches;
  } & Omit<PlasmicBottomPlayer__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicBottomPlayer__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicBottomPlayer__ArgProps,
      internalVariantPropNames: PlasmicBottomPlayer__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicBottomPlayer__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBottomPlayer";
  } else {
    func.displayName = `PlasmicBottomPlayer.${nodeName}`;
  }
  return func;
}

export const PlasmicBottomPlayer = Object.assign(
  // Top-level PlasmicBottomPlayer renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    property1Default: makeNodeComponent("property1Default"),
    rectangle1496: makeNodeComponent("rectangle1496"),
    frame204: makeNodeComponent("frame204"),
    frame206: makeNodeComponent("frame206"),
    iconsSpeed: makeNodeComponent("iconsSpeed"),
    img: makeNodeComponent("img"),
    frame201: makeNodeComponent("frame201"),
    iconsBackward: makeNodeComponent("iconsBackward"),
    frame205: makeNodeComponent("frame205"),
    iconsForward: makeNodeComponent("iconsForward"),
    frame207: makeNodeComponent("frame207"),
    menuIconSmall: makeNodeComponent("menuIconSmall"),

    // Metadata about props expected for PlasmicBottomPlayer
    internalVariantProps: PlasmicBottomPlayer__VariantProps,
    internalArgProps: PlasmicBottomPlayer__ArgProps
  }
);

export default PlasmicBottomPlayer;
/* prettier-ignore-end */
