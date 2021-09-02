// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 24qDGfvb2rMn6oy8PVF95d
// Component: 4vRjyz8vv6
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
import * as sty from "./PlasmicQuestItem.module.css"; // plasmic-import: 4vRjyz8vv6/css

import ArrowUpload24FilledIcon from "./icons/PlasmicIcon__ArrowUpload24Filled"; // plasmic-import: NEaXmn2yDB/icon
import IconcheckmarkCircleIcon from "./icons/PlasmicIcon__IconcheckmarkCircle"; // plasmic-import: lW-Bgpwrmz/icon
import RadioButtonOffsvgIcon from "./icons/PlasmicIcon__RadioButtonOffsvg"; // plasmic-import: QNWY2y_-7/icon

export type PlasmicQuestItem__VariantMembers = {
  hideButton: "hideButton";
  disabled: "disabled";
  done: "done";
};

export type PlasmicQuestItem__VariantsArgs = {
  hideButton?: SingleBooleanChoiceArg<"hideButton">;
  disabled?: SingleBooleanChoiceArg<"disabled">;
  done?: SingleBooleanChoiceArg<"done">;
};

type VariantPropType = keyof PlasmicQuestItem__VariantsArgs;
export const PlasmicQuestItem__VariantProps = new Array<VariantPropType>(
  "hideButton",
  "disabled",
  "done"
);

export type PlasmicQuestItem__ArgsType = {
  text?: React.ReactNode;
};

type ArgPropType = keyof PlasmicQuestItem__ArgsType;
export const PlasmicQuestItem__ArgProps = new Array<ArgPropType>("text");

export type PlasmicQuestItem__OverridesType = {
  root?: p.Flex<"div">;
  questItemContainer?: p.Flex<"div">;
  buttonDefault?: p.Flex<"div">;
  box?: p.Flex<"div">;
  buttonText?: p.Flex<"div">;
  arrowIcon?: p.Flex<"svg">;
};

export interface DefaultQuestItemProps {
  text?: React.ReactNode;
  hideButton?: SingleBooleanChoiceArg<"hideButton">;
  disabled?: SingleBooleanChoiceArg<"disabled">;
  done?: SingleBooleanChoiceArg<"done">;
  className?: string;
}

function PlasmicQuestItem__RenderFunc(props: {
  variants: PlasmicQuestItem__VariantsArgs;
  args: PlasmicQuestItem__ArgsType;
  overrides: PlasmicQuestItem__OverridesType;
  dataFetches?: PlasmicQuestItem__Fetches;
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
        [sty.root__done]: hasVariant(variants, "done", "done")
      })}
    >
      <div
        data-plasmic-name={"questItemContainer"}
        data-plasmic-override={overrides.questItemContainer}
        className={classNames(defaultcss.all, sty.questItemContainer, {
          [sty.questItemContainer__disabled]: hasVariant(
            variants,
            "disabled",
            "disabled"
          ),
          [sty.questItemContainer__done]: hasVariant(variants, "done", "done")
        })}
      >
        <div
          className={classNames(defaultcss.all, sty.freeBox__yBgv, {
            [sty.freeBox__disabled__yBgvcfQ5]: hasVariant(
              variants,
              "disabled",
              "disabled"
            ),
            [sty.freeBox__done__yBgv1KLpF]: hasVariant(
              variants,
              "done",
              "done"
            ),
            [sty.freeBox__hideButton__yBgvcAek8]: hasVariant(
              variants,
              "hideButton",
              "hideButton"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <span className={"plasmic_default__all plasmic_default__span"}>
                <React.Fragment>{"create a new "}</React.Fragment>
                <span
                  className={"plasmic_default__all plasmic_default__span"}
                  style={{ fontStyle: "italic" }}
                >
                  {"Section"}
                </span>
              </span>
            ),
            value: args.text,
            className: classNames(sty.slotText, {
              [sty.slotText__disabled]: hasVariant(
                variants,
                "disabled",
                "disabled"
              ),
              [sty.slotText__done]: hasVariant(variants, "done", "done"),
              [sty.slotText__hideButton]: hasVariant(
                variants,
                "hideButton",
                "hideButton"
              )
            })
          })}
        </div>

        {(
          hasVariant(variants, "done", "done")
            ? false
            : hasVariant(variants, "disabled", "disabled")
            ? false
            : hasVariant(variants, "hideButton", "hideButton")
            ? false
            : true
        ) ? (
          <p.Stack
            as={"div"}
            data-plasmic-name={"buttonDefault"}
            data-plasmic-override={overrides.buttonDefault}
            hasGap={true}
            className={classNames(defaultcss.all, sty.buttonDefault, {
              [sty.buttonDefault__disabled]: hasVariant(
                variants,
                "disabled",
                "disabled"
              ),
              [sty.buttonDefault__done]: hasVariant(variants, "done", "done"),
              [sty.buttonDefault__hideButton]: hasVariant(
                variants,
                "hideButton",
                "hideButton"
              )
            })}
          >
            <div
              data-plasmic-name={"box"}
              data-plasmic-override={overrides.box}
              className={classNames(defaultcss.all, sty.box, {
                [sty.box__disabled]: hasVariant(
                  variants,
                  "disabled",
                  "disabled"
                ),
                [sty.box__done]: hasVariant(variants, "done", "done")
              })}
            >
              <div
                data-plasmic-name={"buttonText"}
                data-plasmic-override={overrides.buttonText}
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.buttonText,
                  {
                    [sty.buttonText__disabled]: hasVariant(
                      variants,
                      "disabled",
                      "disabled"
                    ),
                    [sty.buttonText__done]: hasVariant(variants, "done", "done")
                  }
                )}
              >
                {"Go  "}
              </div>
            </div>

            <div className={classNames(defaultcss.all, sty.freeBox__z3LVu)}>
              <ArrowUpload24FilledIcon
                data-plasmic-name={"arrowIcon"}
                data-plasmic-override={overrides.arrowIcon}
                className={classNames(defaultcss.all, sty.arrowIcon, {
                  [sty.arrowIcon__hideButton]: hasVariant(
                    variants,
                    "hideButton",
                    "hideButton"
                  )
                })}
                role={"img"}
              />
            </div>
          </p.Stack>
        ) : null}
        {(hasVariant(variants, "done", "done") ? true : false) ? (
          <IconcheckmarkCircleIcon
            className={classNames(defaultcss.all, sty.svg__iq43T, {
              [sty.svg__done__iq43T1KLpF]: hasVariant(variants, "done", "done")
            })}
            role={"img"}
          />
        ) : null}
        {(hasVariant(variants, "done", "done") ? true : false) ? (
          <RadioButtonOffsvgIcon
            className={classNames(defaultcss.all, sty.svg__bPTiC, {
              [sty.svg__disabled__bPTiCcfQ5]: hasVariant(
                variants,
                "disabled",
                "disabled"
              ),
              [sty.svg__done__bPTiC1KLpF]: hasVariant(variants, "done", "done"),
              [sty.svg__hideButton__bPTiCcAek8]: hasVariant(
                variants,
                "hideButton",
                "hideButton"
              )
            })}
            role={"img"}
          />
        ) : null}
      </div>

      {(hasVariant(variants, "done", "done") ? false : false) ? (
        <div
          className={classNames(defaultcss.all, sty.freeBox___3Xg0Z, {
            [sty.freeBox__done___3Xg0Z1KLpF]: hasVariant(
              variants,
              "done",
              "done"
            )
          })}
        />
      ) : null}
      {(hasVariant(variants, "done", "done") ? true : false) ? (
        <div
          className={classNames(defaultcss.all, sty.freeBox__nn6Nm, {
            [sty.freeBox__done__nn6Nm1KLpF]: hasVariant(
              variants,
              "done",
              "done"
            )
          })}
        />
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "questItemContainer",
    "buttonDefault",
    "box",
    "buttonText",
    "arrowIcon"
  ],
  questItemContainer: [
    "questItemContainer",
    "buttonDefault",
    "box",
    "buttonText",
    "arrowIcon"
  ],
  buttonDefault: ["buttonDefault", "box", "buttonText", "arrowIcon"],
  box: ["box", "buttonText"],
  buttonText: ["buttonText"],
  arrowIcon: ["arrowIcon"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  questItemContainer: "div";
  buttonDefault: "div";
  box: "div";
  buttonText: "div";
  arrowIcon: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicQuestItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicQuestItem__VariantsArgs;
    args?: PlasmicQuestItem__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicQuestItem__Fetches;
  } & Omit<PlasmicQuestItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicQuestItem__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicQuestItem__ArgProps,
      internalVariantPropNames: PlasmicQuestItem__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicQuestItem__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicQuestItem";
  } else {
    func.displayName = `PlasmicQuestItem.${nodeName}`;
  }
  return func;
}

export const PlasmicQuestItem = Object.assign(
  // Top-level PlasmicQuestItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    questItemContainer: makeNodeComponent("questItemContainer"),
    buttonDefault: makeNodeComponent("buttonDefault"),
    box: makeNodeComponent("box"),
    buttonText: makeNodeComponent("buttonText"),
    arrowIcon: makeNodeComponent("arrowIcon"),

    // Metadata about props expected for PlasmicQuestItem
    internalVariantProps: PlasmicQuestItem__VariantProps,
    internalArgProps: PlasmicQuestItem__ArgProps
  }
);

export default PlasmicQuestItem;
/* prettier-ignore-end */
