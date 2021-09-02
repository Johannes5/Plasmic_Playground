// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 24qDGfvb2rMn6oy8PVF95d
// Component: kex8b4ayIq
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

import { ThemeValue, useTheme } from "./PlasmicGlobalVariant__Theme"; // plasmic-import: 40N_XXvhaC/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_hub_hub.module.css"; // plasmic-import: 24qDGfvb2rMn6oy8PVF95d/projectcss
import * as sty from "./PlasmicArticleItemAlt2.module.css"; // plasmic-import: kex8b4ayIq/css

export type PlasmicArticleItemAlt2__VariantMembers = {
  exclusions: "unnamedVariant" | "unnamedVariant2";
};

export type PlasmicArticleItemAlt2__VariantsArgs = {
  exclusions?: MultiChoiceArg<"unnamedVariant" | "unnamedVariant2">;
};

type VariantPropType = keyof PlasmicArticleItemAlt2__VariantsArgs;
export const PlasmicArticleItemAlt2__VariantProps = new Array<VariantPropType>(
  "exclusions"
);

export type PlasmicArticleItemAlt2__ArgsType = {
  title?: React.ReactNode;
  snippet?: React.ReactNode;
  source?: React.ReactNode;
  readingTime?: React.ReactNode;
  date?: React.ReactNode;
};

type ArgPropType = keyof PlasmicArticleItemAlt2__ArgsType;
export const PlasmicArticleItemAlt2__ArgProps = new Array<ArgPropType>(
  "title",
  "snippet",
  "source",
  "readingTime",
  "date"
);

export type PlasmicArticleItemAlt2__OverridesType = {
  root?: p.Flex<"div">;
  articleContent?: p.Flex<"div">;
  titleImage?: p.Flex<"div">;
  title?: p.Flex<"div">;
  snippet?: p.Flex<"div">;
  metadata?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  timeData?: p.Flex<"div">;
};

export interface DefaultArticleItemAlt2Props {
  title?: React.ReactNode;
  snippet?: React.ReactNode;
  source?: React.ReactNode;
  readingTime?: React.ReactNode;
  date?: React.ReactNode;
  exclusions?: MultiChoiceArg<"unnamedVariant" | "unnamedVariant2">;
  className?: string;
}

function PlasmicArticleItemAlt2__RenderFunc(props: {
  variants: PlasmicArticleItemAlt2__VariantsArgs;
  args: PlasmicArticleItemAlt2__ArgsType;
  overrides: PlasmicArticleItemAlt2__OverridesType;
  dataFetches?: PlasmicArticleItemAlt2__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    theme: useTheme()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div
        data-plasmic-name={"articleContent"}
        data-plasmic-override={overrides.articleContent}
        className={classNames(defaultcss.all, sty.articleContent, {
          [sty.articleContent__global_theme_dark]: hasVariant(
            globalVariants,
            "theme",
            "dark"
          )
        })}
      >
        <div
          data-plasmic-name={"titleImage"}
          data-plasmic-override={overrides.titleImage}
          className={classNames(defaultcss.all, sty.titleImage, {
            [sty.titleImage__exclusions_unnamedVariant2]: hasVariant(
              variants,
              "exclusions",
              "unnamedVariant2"
            ),
            [sty.titleImage__global_theme_dark]: hasVariant(
              globalVariants,
              "theme",
              "dark"
            )
          })}
        />

        <div
          data-plasmic-name={"title"}
          data-plasmic-override={overrides.title}
          className={classNames(defaultcss.all, sty.title)}
        >
          {p.renderPlasmicSlot({
            defaultContents:
              "The MacBook Pro, iPad mini, and more are discounted at ",
            value: args.title,
            className: classNames(sty.slotTitle, {
              [sty.slotTitle__global_theme_dark]: hasVariant(
                globalVariants,
                "theme",
                "dark"
              )
            })
          })}
        </div>

        <div
          data-plasmic-name={"snippet"}
          data-plasmic-override={overrides.snippet}
          className={classNames(defaultcss.all, sty.snippet)}
        >
          {p.renderPlasmicSlot({
            defaultContents:
              "Your goal in life is to find out the people who need you the most, to find out the business that needs you the most, to find the project and the art that needs you the most. There is something out there just for you...",
            value: args.snippet,
            className: classNames(sty.slotSnippet, {
              [sty.slotSnippet__global_theme_dark]: hasVariant(
                globalVariants,
                "theme",
                "dark"
              )
            })
          })}
        </div>

        <div
          data-plasmic-name={"metadata"}
          data-plasmic-override={overrides.metadata}
          className={classNames(defaultcss.all, sty.metadata, {
            [sty.metadata__global_theme_dark]: hasVariant(
              globalVariants,
              "theme",
              "dark"
            )
          })}
        >
          <div
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            className={classNames(defaultcss.all, sty.freeBox)}
          >
            {p.renderPlasmicSlot({
              defaultContents: "The Verge",
              value: args.source,
              className: classNames(sty.slotSource, {
                [sty.slotSource__global_theme_dark]: hasVariant(
                  globalVariants,
                  "theme",
                  "dark"
                )
              })
            })}
          </div>

          <p.Stack
            as={"div"}
            data-plasmic-name={"timeData"}
            data-plasmic-override={overrides.timeData}
            hasGap={true}
            className={classNames(defaultcss.all, sty.timeData)}
          >
            {p.renderPlasmicSlot({
              defaultContents: (
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.freeBox__hszr2
                  )}
                >
                  {"2 min read"}
                </div>
              ),

              value: args.readingTime
            })}

            {p.renderPlasmicSlot({
              defaultContents: (
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.freeBox__ga30V
                  )}
                >
                  {"1 months ago"}
                </div>
              ),

              value: args.date
            })}
          </p.Stack>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "articleContent",
    "titleImage",
    "title",
    "snippet",
    "metadata",
    "freeBox",
    "timeData"
  ],
  articleContent: [
    "articleContent",
    "titleImage",
    "title",
    "snippet",
    "metadata",
    "freeBox",
    "timeData"
  ],
  titleImage: ["titleImage"],
  title: ["title"],
  snippet: ["snippet"],
  metadata: ["metadata", "freeBox", "timeData"],
  freeBox: ["freeBox"],
  timeData: ["timeData"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  articleContent: "div";
  titleImage: "div";
  title: "div";
  snippet: "div";
  metadata: "div";
  freeBox: "div";
  timeData: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicArticleItemAlt2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicArticleItemAlt2__VariantsArgs;
    args?: PlasmicArticleItemAlt2__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicArticleItemAlt2__Fetches;
  } & Omit<PlasmicArticleItemAlt2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicArticleItemAlt2__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicArticleItemAlt2__ArgProps,
      internalVariantPropNames: PlasmicArticleItemAlt2__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicArticleItemAlt2__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicArticleItemAlt2";
  } else {
    func.displayName = `PlasmicArticleItemAlt2.${nodeName}`;
  }
  return func;
}

export const PlasmicArticleItemAlt2 = Object.assign(
  // Top-level PlasmicArticleItemAlt2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    articleContent: makeNodeComponent("articleContent"),
    titleImage: makeNodeComponent("titleImage"),
    title: makeNodeComponent("title"),
    snippet: makeNodeComponent("snippet"),
    metadata: makeNodeComponent("metadata"),
    freeBox: makeNodeComponent("freeBox"),
    timeData: makeNodeComponent("timeData"),

    // Metadata about props expected for PlasmicArticleItemAlt2
    internalVariantProps: PlasmicArticleItemAlt2__VariantProps,
    internalArgProps: PlasmicArticleItemAlt2__ArgProps
  }
);

export default PlasmicArticleItemAlt2;
/* prettier-ignore-end */
