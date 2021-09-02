// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 24qDGfvb2rMn6oy8PVF95d
// Component: Y6RToVMa05
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
import ArticleItemListImage from "../../ArticleItemListImage"; // plasmic-import: 1rbBxAIqUr/component

import { ThemeValue, useTheme } from "./PlasmicGlobalVariant__Theme"; // plasmic-import: 40N_XXvhaC/globalVariant
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: X6JbprEhruOi/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_hub_hub.module.css"; // plasmic-import: 24qDGfvb2rMn6oy8PVF95d/projectcss
import * as sty from "./PlasmicArticleItemList.module.css"; // plasmic-import: Y6RToVMa05/css

import DeviderIcon from "./icons/PlasmicIcon__Devider"; // plasmic-import: p54zAGje4d/icon

export type PlasmicArticleItemList__VariantMembers = {
  composition: "full" | "hideImage" | "titleOnly";
};

export type PlasmicArticleItemList__VariantsArgs = {
  composition?: MultiChoiceArg<"full" | "hideImage" | "titleOnly">;
};

type VariantPropType = keyof PlasmicArticleItemList__VariantsArgs;
export const PlasmicArticleItemList__VariantProps = new Array<VariantPropType>(
  "composition"
);

export type PlasmicArticleItemList__ArgsType = {
  snippet?: React.ReactNode;
  source?: React.ReactNode;
  readingTime?: React.ReactNode;
  date?: React.ReactNode;
  title?: React.ReactNode;
  titleImage?: React.ReactNode;
};

type ArgPropType = keyof PlasmicArticleItemList__ArgsType;
export const PlasmicArticleItemList__ArgProps = new Array<ArgPropType>(
  "snippet",
  "source",
  "readingTime",
  "date",
  "title",
  "titleImage"
);

export type PlasmicArticleItemList__OverridesType = {
  root?: p.Flex<"div">;
  articleItem?: p.Flex<"div">;
  articleContent?: p.Flex<"div">;
  textContainer?: p.Flex<"div">;
  titleContainer?: p.Flex<"div">;
  metadataContainer?: p.Flex<"div">;
  source?: p.Flex<"div">;
  timeData2?: p.Flex<"div">;
  box?: p.Flex<"div">;
  date?: p.Flex<"div">;
  snippetContainer?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
};

export interface DefaultArticleItemListProps {
  snippet?: React.ReactNode;
  source?: React.ReactNode;
  readingTime?: React.ReactNode;
  date?: React.ReactNode;
  title?: React.ReactNode;
  titleImage?: React.ReactNode;
  composition?: MultiChoiceArg<"full" | "hideImage" | "titleOnly">;
  className?: string;
}

function PlasmicArticleItemList__RenderFunc(props: {
  variants: PlasmicArticleItemList__VariantsArgs;
  args: PlasmicArticleItemList__ArgsType;
  overrides: PlasmicArticleItemList__OverridesType;
  dataFetches?: PlasmicArticleItemList__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    theme: useTheme(),
    screen: useScreenVariants()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      {true ? (
        <p.Stack
          as={"div"}
          data-plasmic-name={"articleItem"}
          data-plasmic-override={overrides.articleItem}
          hasGap={true}
          className={classNames(defaultcss.all, sty.articleItem, {
            [sty.articleItem__composition_full]: hasVariant(
              variants,
              "composition",
              "full"
            ),
            [sty.articleItem__composition_hideImage]: hasVariant(
              variants,
              "composition",
              "hideImage"
            ),
            [sty.articleItem__composition_titleOnly]: hasVariant(
              variants,
              "composition",
              "titleOnly"
            ),
            [sty.articleItem__global_theme_dark]: hasVariant(
              globalVariants,
              "theme",
              "dark"
            ),
            [sty.articleItem__global_theme_light]: hasVariant(
              globalVariants,
              "theme",
              "light"
            )
          })}
        >
          <p.Stack
            as={"div"}
            data-plasmic-name={"articleContent"}
            data-plasmic-override={overrides.articleContent}
            hasGap={true}
            className={classNames(defaultcss.all, sty.articleContent, {
              [sty.articleContent__composition_full]: hasVariant(
                variants,
                "composition",
                "full"
              ),
              [sty.articleContent__global_theme_dark]: hasVariant(
                globalVariants,
                "theme",
                "dark"
              )
            })}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"textContainer"}
              data-plasmic-override={overrides.textContainer}
              hasGap={true}
              className={classNames(defaultcss.all, sty.textContainer, {
                [sty.textContainer__composition_full]: hasVariant(
                  variants,
                  "composition",
                  "full"
                ),
                [sty.textContainer__composition_titleOnly]: hasVariant(
                  variants,
                  "composition",
                  "titleOnly"
                )
              })}
            >
              <div
                data-plasmic-name={"titleContainer"}
                data-plasmic-override={overrides.titleContainer}
                className={classNames(
                  defaultcss.all,
                  sty.titleContainer,
                  "titleContainer" as const,
                  {
                    [sty.titleContainer__composition_full]: hasVariant(
                      variants,
                      "composition",
                      "full"
                    ),
                    [sty.titleContainer__composition_hideImage]: hasVariant(
                      variants,
                      "composition",
                      "hideImage"
                    ),
                    [sty.titleContainer__composition_titleOnly]: hasVariant(
                      variants,
                      "composition",
                      "titleOnly"
                    ),
                    [sty.titleContainer__global_theme_dark]: hasVariant(
                      globalVariants,
                      "theme",
                      "dark"
                    ),
                    [sty.titleContainer__global_theme_light]: hasVariant(
                      globalVariants,
                      "theme",
                      "light"
                    )
                  }
                )}
              >
                {p.renderPlasmicSlot({
                  defaultContents: "Two Things We Know With High Confidence",
                  value: args.title,
                  className: classNames(sty.slotTitle, {
                    [sty.slotTitle__composition_full]: hasVariant(
                      variants,
                      "composition",
                      "full"
                    ),
                    [sty.slotTitle__composition_hideImage]: hasVariant(
                      variants,
                      "composition",
                      "hideImage"
                    ),
                    [sty.slotTitle__composition_titleOnly]: hasVariant(
                      variants,
                      "composition",
                      "titleOnly"
                    ),
                    [sty.slotTitle__global_theme_dark]: hasVariant(
                      globalVariants,
                      "theme",
                      "dark"
                    ),
                    [sty.slotTitle__global_theme_light]: hasVariant(
                      globalVariants,
                      "theme",
                      "light"
                    )
                  })
                })}
              </div>

              <p.Stack
                as={"div"}
                data-plasmic-name={"metadataContainer"}
                data-plasmic-override={overrides.metadataContainer}
                hasGap={true}
                className={classNames(defaultcss.all, sty.metadataContainer, {
                  [sty.metadataContainer__composition_full]: hasVariant(
                    variants,
                    "composition",
                    "full"
                  ),
                  [sty.metadataContainer__composition_hideImage]: hasVariant(
                    variants,
                    "composition",
                    "hideImage"
                  ),
                  [sty.metadataContainer__composition_titleOnly]: hasVariant(
                    variants,
                    "composition",
                    "titleOnly"
                  ),
                  [sty.metadataContainer__global_theme_light]: hasVariant(
                    globalVariants,
                    "theme",
                    "light"
                  )
                })}
              >
                <div
                  data-plasmic-name={"source"}
                  data-plasmic-override={overrides.source}
                  className={classNames(defaultcss.all, sty.source, {
                    [sty.source__composition_full]: hasVariant(
                      variants,
                      "composition",
                      "full"
                    ),
                    [sty.source__global_theme_dark]: hasVariant(
                      globalVariants,
                      "theme",
                      "dark"
                    ),
                    [sty.source__global_theme_light]: hasVariant(
                      globalVariants,
                      "theme",
                      "light"
                    )
                  })}
                >
                  {p.renderPlasmicSlot({
                    defaultContents: "collaborativefund.com",
                    value: args.source,
                    className: classNames(sty.slotSource, {
                      [sty.slotSource__composition_full]: hasVariant(
                        variants,
                        "composition",
                        "full"
                      ),
                      [sty.slotSource__global_theme_dark]: hasVariant(
                        globalVariants,
                        "theme",
                        "dark"
                      ),
                      [sty.slotSource__global_theme_light]: hasVariant(
                        globalVariants,
                        "theme",
                        "light"
                      )
                    })
                  })}
                </div>

                <div
                  data-plasmic-name={"timeData2"}
                  data-plasmic-override={overrides.timeData2}
                  className={classNames(defaultcss.all, sty.timeData2, {
                    [sty.timeData2__composition_full]: hasVariant(
                      variants,
                      "composition",
                      "full"
                    ),
                    [sty.timeData2__global_theme_light]: hasVariant(
                      globalVariants,
                      "theme",
                      "light"
                    )
                  })}
                >
                  <div
                    data-plasmic-name={"box"}
                    data-plasmic-override={overrides.box}
                    className={classNames(defaultcss.all, sty.box, {
                      [sty.box__composition_full]: hasVariant(
                        variants,
                        "composition",
                        "full"
                      ),
                      [sty.box__composition_hideImage]: hasVariant(
                        variants,
                        "composition",
                        "hideImage"
                      ),
                      [sty.box__composition_titleOnly]: hasVariant(
                        variants,
                        "composition",
                        "titleOnly"
                      ),
                      [sty.box__global_theme_dark]: hasVariant(
                        globalVariants,
                        "theme",
                        "dark"
                      ),
                      [sty.box__global_theme_light]: hasVariant(
                        globalVariants,
                        "theme",
                        "light"
                      )
                    })}
                  >
                    {p.renderPlasmicSlot({
                      defaultContents: "4 min read",
                      value: args.readingTime,
                      className: classNames(sty.slotReadingTime, {
                        [sty.slotReadingTime__composition_hideImage]:
                          hasVariant(variants, "composition", "hideImage"),
                        [sty.slotReadingTime__composition_titleOnly]:
                          hasVariant(variants, "composition", "titleOnly"),
                        [sty.slotReadingTime__global_theme_dark]: hasVariant(
                          globalVariants,
                          "theme",
                          "dark"
                        ),
                        [sty.slotReadingTime__global_theme_light]: hasVariant(
                          globalVariants,
                          "theme",
                          "light"
                        )
                      })
                    })}
                  </div>

                  <div
                    data-plasmic-name={"date"}
                    data-plasmic-override={overrides.date}
                    className={classNames(defaultcss.all, sty.date, {
                      [sty.date__composition_full]: hasVariant(
                        variants,
                        "composition",
                        "full"
                      ),
                      [sty.date__composition_hideImage]: hasVariant(
                        variants,
                        "composition",
                        "hideImage"
                      ),
                      [sty.date__composition_titleOnly]: hasVariant(
                        variants,
                        "composition",
                        "titleOnly"
                      ),
                      [sty.date__global_theme_dark]: hasVariant(
                        globalVariants,
                        "theme",
                        "dark"
                      ),
                      [sty.date__global_theme_light]: hasVariant(
                        globalVariants,
                        "theme",
                        "light"
                      )
                    })}
                  >
                    {p.renderPlasmicSlot({
                      defaultContents: "Mar 16",
                      value: args.date,
                      className: classNames(sty.slotDate, {
                        [sty.slotDate__composition_hideImage]: hasVariant(
                          variants,
                          "composition",
                          "hideImage"
                        ),
                        [sty.slotDate__composition_titleOnly]: hasVariant(
                          variants,
                          "composition",
                          "titleOnly"
                        ),
                        [sty.slotDate__global_theme_dark]: hasVariant(
                          globalVariants,
                          "theme",
                          "dark"
                        ),
                        [sty.slotDate__global_theme_light]: hasVariant(
                          globalVariants,
                          "theme",
                          "light"
                        )
                      })
                    })}
                  </div>
                </div>
              </p.Stack>

              {(
                hasVariant(variants, "composition", "titleOnly") ? false : true
              ) ? (
                <div
                  data-plasmic-name={"snippetContainer"}
                  data-plasmic-override={overrides.snippetContainer}
                  className={classNames(defaultcss.all, sty.snippetContainer, {
                    [sty.snippetContainer__composition_full]: hasVariant(
                      variants,
                      "composition",
                      "full"
                    ),
                    [sty.snippetContainer__composition_titleOnly]: hasVariant(
                      variants,
                      "composition",
                      "titleOnly"
                    )
                  })}
                  id={"snippetContainer" as const}
                >
                  {(
                    hasVariant(variants, "composition", "titleOnly")
                      ? false
                      : true
                  )
                    ? p.renderPlasmicSlot({
                        defaultContents:
                          "Unknowns exceed knowns even in the best of times.\nToday, that’s increased exponentially.\nNo one can expect their ability to predict the next year to be any better than their ability to predict the last year. The speed of change anchors the accuracy of predictions, so the year ahead becomes …",
                        value: args.snippet,
                        className: classNames(sty.slotSnippet, {
                          [sty.slotSnippet__composition_full]: hasVariant(
                            variants,
                            "composition",
                            "full"
                          ),
                          [sty.slotSnippet__composition_hideImage]: hasVariant(
                            variants,
                            "composition",
                            "hideImage"
                          ),
                          [sty.slotSnippet__composition_titleOnly]: hasVariant(
                            variants,
                            "composition",
                            "titleOnly"
                          ),
                          [sty.slotSnippet__global_theme_dark]: hasVariant(
                            globalVariants,
                            "theme",
                            "dark"
                          ),
                          [sty.slotSnippet__global_theme_light]: hasVariant(
                            globalVariants,
                            "theme",
                            "light"
                          )
                        })
                      })
                    : null}
                </div>
              ) : null}
            </p.Stack>

            <div
              className={classNames(defaultcss.all, sty.freeBox___1Oga, {
                [sty.freeBox__global_theme_dark___1OgaOIz4X]: hasVariant(
                  globalVariants,
                  "theme",
                  "dark"
                )
              })}
            >
              {p.renderPlasmicSlot({
                defaultContents: (
                  <ArticleItemListImage
                    className={classNames(
                      "__wab_instance",
                      sty.articleItemListImage__qz9Qy
                    )}
                  />
                ),

                value: args.titleImage
              })}
            </div>
          </p.Stack>

          {true ? (
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.freeBox__ekvEh)}
            >
              {true ? (
                <DeviderIcon
                  data-plasmic-name={"svg"}
                  data-plasmic-override={overrides.svg}
                  className={classNames(defaultcss.all, sty.svg, {
                    [sty.svg__global_theme_light]: hasVariant(
                      globalVariants,
                      "theme",
                      "light"
                    )
                  })}
                  role={"img"}
                />
              ) : null}
            </p.Stack>
          ) : null}
        </p.Stack>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "articleItem",
    "articleContent",
    "textContainer",
    "titleContainer",
    "metadataContainer",
    "source",
    "timeData2",
    "box",
    "date",
    "snippetContainer",
    "svg"
  ],
  articleItem: [
    "articleItem",
    "articleContent",
    "textContainer",
    "titleContainer",
    "metadataContainer",
    "source",
    "timeData2",
    "box",
    "date",
    "snippetContainer",
    "svg"
  ],
  articleContent: [
    "articleContent",
    "textContainer",
    "titleContainer",
    "metadataContainer",
    "source",
    "timeData2",
    "box",
    "date",
    "snippetContainer"
  ],
  textContainer: [
    "textContainer",
    "titleContainer",
    "metadataContainer",
    "source",
    "timeData2",
    "box",
    "date",
    "snippetContainer"
  ],
  titleContainer: ["titleContainer"],
  metadataContainer: [
    "metadataContainer",
    "source",
    "timeData2",
    "box",
    "date"
  ],
  source: ["source"],
  timeData2: ["timeData2", "box", "date"],
  box: ["box"],
  date: ["date"],
  snippetContainer: ["snippetContainer"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  articleItem: "div";
  articleContent: "div";
  textContainer: "div";
  titleContainer: "div";
  metadataContainer: "div";
  source: "div";
  timeData2: "div";
  box: "div";
  date: "div";
  snippetContainer: "div";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicArticleItemList__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicArticleItemList__VariantsArgs;
    args?: PlasmicArticleItemList__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicArticleItemList__Fetches;
  } & Omit<PlasmicArticleItemList__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicArticleItemList__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicArticleItemList__ArgProps,
      internalVariantPropNames: PlasmicArticleItemList__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicArticleItemList__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicArticleItemList";
  } else {
    func.displayName = `PlasmicArticleItemList.${nodeName}`;
  }
  return func;
}

export const PlasmicArticleItemList = Object.assign(
  // Top-level PlasmicArticleItemList renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    articleItem: makeNodeComponent("articleItem"),
    articleContent: makeNodeComponent("articleContent"),
    textContainer: makeNodeComponent("textContainer"),
    titleContainer: makeNodeComponent("titleContainer"),
    metadataContainer: makeNodeComponent("metadataContainer"),
    source: makeNodeComponent("source"),
    timeData2: makeNodeComponent("timeData2"),
    box: makeNodeComponent("box"),
    date: makeNodeComponent("date"),
    snippetContainer: makeNodeComponent("snippetContainer"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicArticleItemList
    internalVariantProps: PlasmicArticleItemList__VariantProps,
    internalArgProps: PlasmicArticleItemList__ArgProps
  }
);

export default PlasmicArticleItemList;
/* prettier-ignore-end */