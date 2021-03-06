// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 24qDGfvb2rMn6oy8PVF95d
// Component: Rc9JumW9YT
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
import InterestTileNew from "../../InterestTileNew"; // plasmic-import: 1VDsOAINg5/component
import InterestImage from "../../InterestImage"; // plasmic-import: wOaOuD1bPJ/component
import ArticleItemList from "../../ArticleItemList"; // plasmic-import: Y6RToVMa05/component
import ArticleItemListImage from "../../ArticleItemListImage"; // plasmic-import: 1rbBxAIqUr/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: X6JbprEhruOi/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_hub_hub.module.css"; // plasmic-import: 24qDGfvb2rMn6oy8PVF95d/projectcss
import * as sty from "./PlasmicInterests.module.css"; // plasmic-import: Rc9JumW9YT/css

export type PlasmicInterests__VariantMembers = {};

export type PlasmicInterests__VariantsArgs = {};
type VariantPropType = keyof PlasmicInterests__VariantsArgs;
export const PlasmicInterests__VariantProps = new Array<VariantPropType>();

export type PlasmicInterests__ArgsType = {
  numberOfSelectedInterests?: React.ReactNode;
};

type ArgPropType = keyof PlasmicInterests__ArgsType;
export const PlasmicInterests__ArgProps = new Array<ArgPropType>(
  "numberOfSelectedInterests"
);

export type PlasmicInterests__OverridesType = {
  root?: p.Flex<"div">;
  h2Headline?: p.Flex<"div">;
  h2Headline2?: p.Flex<"div">;
  interestContainer?: p.Flex<"div">;
  interestTitle?: p.Flex<"div">;
  bottomToolbar?: p.Flex<"div">;
  nextButton?: p.Flex<"div">;
  buttonText?: p.Flex<"div">;
  articleItemList?: p.Flex<typeof ArticleItemList>;
};

export interface DefaultInterestsProps {
  numberOfSelectedInterests?: React.ReactNode;
  className?: string;
}

function PlasmicInterests__RenderFunc(props: {
  variants: PlasmicInterests__VariantsArgs;
  args: PlasmicInterests__ArgsType;
  overrides: PlasmicInterests__OverridesType;
  dataFetches?: PlasmicInterests__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <React.Fragment>
      {}
      {}

      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <div className={classNames(defaultcss.all, sty.freeBox__eyOtx)}>
            <div
              data-plasmic-name={"h2Headline"}
              data-plasmic-override={overrides.h2Headline}
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.h2Headline
              )}
            >
              {hasVariant(globalVariants, "screen", "mobileOnly")
                ? "To show you how HubHub works, \nwe will create your first Hub for you, "
                : "To show you how HubHub works, we will \ncreate your first Hub for you, "}
            </div>

            <div
              data-plasmic-name={"h2Headline2"}
              data-plasmic-override={overrides.h2Headline2}
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.h2Headline2
              )}
            >
              {"based on some of your interests"}
            </div>

            <p.Stack
              as={"div"}
              data-plasmic-name={"interestContainer"}
              data-plasmic-override={overrides.interestContainer}
              hasGap={true}
              className={classNames(defaultcss.all, sty.interestContainer)}
            >
              <InterestTileNew
                className={classNames(
                  "__wab_instance",
                  sty.interestTileNew__d28K1
                )}
                interestName={
                  <div
                    data-plasmic-name={"interestTitle"}
                    data-plasmic-override={overrides.interestTitle}
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.interestTitle
                    )}
                  >
                    {"Personal Improvement"}
                  </div>
                }
                selected={"selected" as const}
              />

              <InterestTileNew
                className={classNames(
                  "__wab_instance",
                  sty.interestTileNew__vkh0O
                )}
              />

              <InterestTileNew
                className={classNames(
                  "__wab_instance",
                  sty.interestTileNew__sp6Bf
                )}
              />

              <InterestTileNew
                className={classNames(
                  "__wab_instance",
                  sty.interestTileNew___8PnzW
                )}
              />

              <InterestTileNew
                className={classNames(
                  "__wab_instance",
                  sty.interestTileNew__eXsWt
                )}
              />

              <InterestTileNew
                className={classNames(
                  "__wab_instance",
                  sty.interestTileNew__eeVgb
                )}
              />

              <InterestTileNew
                className={classNames(
                  "__wab_instance",
                  sty.interestTileNew__ksHlY
                )}
                selected={"selected" as const}
              />

              <InterestTileNew
                className={classNames(
                  "__wab_instance",
                  sty.interestTileNew___7Cgtk
                )}
              />

              <InterestTileNew
                className={classNames(
                  "__wab_instance",
                  sty.interestTileNew__hIx7Q
                )}
              />

              <InterestTileNew
                className={classNames(
                  "__wab_instance",
                  sty.interestTileNew___2H9B9
                )}
              />

              <InterestTileNew
                className={classNames(
                  "__wab_instance",
                  sty.interestTileNew__qo7Su
                )}
              />
            </p.Stack>
          </div>

          <div
            data-plasmic-name={"bottomToolbar"}
            data-plasmic-override={overrides.bottomToolbar}
            className={classNames(defaultcss.all, sty.bottomToolbar)}
          >
            <div className={classNames(defaultcss.all, sty.freeBox__uPwi1)}>
              {p.renderPlasmicSlot({
                defaultContents: "2  selected",
                value: args.numberOfSelectedInterests,
                className: classNames(sty.slotNumberOfSelectedInterests)
              })}
            </div>

            <div
              data-plasmic-name={"nextButton"}
              data-plasmic-override={overrides.nextButton}
              className={classNames(defaultcss.all, sty.nextButton)}
            >
              <div
                data-plasmic-name={"buttonText"}
                data-plasmic-override={overrides.buttonText}
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.buttonText
                )}
              >
                {"next"}
              </div>
            </div>
          </div>

          <ArticleItemList
            data-plasmic-name={"articleItemList"}
            data-plasmic-override={overrides.articleItemList}
            className={classNames("__wab_instance", sty.articleItemList)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "h2Headline",
    "h2Headline2",
    "interestContainer",
    "interestTitle",
    "bottomToolbar",
    "nextButton",
    "buttonText",
    "articleItemList"
  ],
  h2Headline: ["h2Headline"],
  h2Headline2: ["h2Headline2"],
  interestContainer: ["interestContainer", "interestTitle"],
  interestTitle: ["interestTitle"],
  bottomToolbar: ["bottomToolbar", "nextButton", "buttonText"],
  nextButton: ["nextButton", "buttonText"],
  buttonText: ["buttonText"],
  articleItemList: ["articleItemList"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  h2Headline: "div";
  h2Headline2: "div";
  interestContainer: "div";
  interestTitle: "div";
  bottomToolbar: "div";
  nextButton: "div";
  buttonText: "div";
  articleItemList: typeof ArticleItemList;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicInterests__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicInterests__VariantsArgs;
    args?: PlasmicInterests__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicInterests__Fetches;
  } & Omit<PlasmicInterests__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicInterests__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicInterests__ArgProps,
      internalVariantPropNames: PlasmicInterests__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicInterests__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInterests";
  } else {
    func.displayName = `PlasmicInterests.${nodeName}`;
  }
  return func;
}

export const PlasmicInterests = Object.assign(
  // Top-level PlasmicInterests renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h2Headline: makeNodeComponent("h2Headline"),
    h2Headline2: makeNodeComponent("h2Headline2"),
    interestContainer: makeNodeComponent("interestContainer"),
    interestTitle: makeNodeComponent("interestTitle"),
    bottomToolbar: makeNodeComponent("bottomToolbar"),
    nextButton: makeNodeComponent("nextButton"),
    buttonText: makeNodeComponent("buttonText"),
    articleItemList: makeNodeComponent("articleItemList"),

    // Metadata about props expected for PlasmicInterests
    internalVariantProps: PlasmicInterests__VariantProps,
    internalArgProps: PlasmicInterests__ArgProps
  }
);

export default PlasmicInterests;
/* prettier-ignore-end */
