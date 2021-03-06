// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 24qDGfvb2rMn6oy8PVF95d
// Component: zub8z7iFg-
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
import * as sty from "./PlasmicArticleItemCardImage.module.css"; // plasmic-import: zub8z7iFg-/css

import titleImageQmvfGtdQe from "./images/titleImage.png"; // plasmic-import: qmvfGtdQe/picture

export type PlasmicArticleItemCardImage__VariantMembers = {};

export type PlasmicArticleItemCardImage__VariantsArgs = {};
type VariantPropType = keyof PlasmicArticleItemCardImage__VariantsArgs;
export const PlasmicArticleItemCardImage__VariantProps =
  new Array<VariantPropType>();

export type PlasmicArticleItemCardImage__ArgsType = {};
type ArgPropType = keyof PlasmicArticleItemCardImage__ArgsType;
export const PlasmicArticleItemCardImage__ArgProps = new Array<ArgPropType>();

export type PlasmicArticleItemCardImage__OverridesType = {
  root?: p.Flex<"img">;
};

export interface DefaultArticleItemCardImageProps {
  className?: string;
}

function PlasmicArticleItemCardImage__RenderFunc(props: {
  variants: PlasmicArticleItemCardImage__VariantsArgs;
  args: PlasmicArticleItemCardImage__ArgsType;
  overrides: PlasmicArticleItemCardImage__OverridesType;
  dataFetches?: PlasmicArticleItemCardImage__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <img
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      alt={""}
      className={classNames(defaultcss.img, projectcss.root_reset, sty.root)}
      role={"img"}
      src={titleImageQmvfGtdQe}
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "img";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicArticleItemCardImage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicArticleItemCardImage__VariantsArgs;
    args?: PlasmicArticleItemCardImage__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicArticleItemCardImage__Fetches;
  } & Omit<PlasmicArticleItemCardImage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicArticleItemCardImage__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicArticleItemCardImage__ArgProps,
      internalVariantPropNames: PlasmicArticleItemCardImage__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicArticleItemCardImage__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicArticleItemCardImage";
  } else {
    func.displayName = `PlasmicArticleItemCardImage.${nodeName}`;
  }
  return func;
}

export const PlasmicArticleItemCardImage = Object.assign(
  // Top-level PlasmicArticleItemCardImage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicArticleItemCardImage
    internalVariantProps: PlasmicArticleItemCardImage__VariantProps,
    internalArgProps: PlasmicArticleItemCardImage__ArgProps
  }
);

export default PlasmicArticleItemCardImage;
/* prettier-ignore-end */
