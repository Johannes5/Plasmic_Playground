// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 24qDGfvb2rMn6oy8PVF95d
// Component: CMg-M2mVji
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
import * as sty from "./PlasmicCircleButton.module.css"; // plasmic-import: CMg-M2mVji/css

import BlueCircleIcon from "./icons/PlasmicIcon__BlueCircle"; // plasmic-import: VIYOCOF-zp/icon
import Add24FilledIcon from "./icons/PlasmicIcon__Add24Filled"; // plasmic-import: W5RSWrKI-W/icon
import VectorIcon from "./icons/PlasmicIcon__Vector"; // plasmic-import: -gNKA8h-Z4/icon

export type PlasmicCircleButton__VariantMembers = {
  selected: "selected";
  small: "small";
};

export type PlasmicCircleButton__VariantsArgs = {
  selected?: SingleBooleanChoiceArg<"selected">;
  small?: SingleBooleanChoiceArg<"small">;
};

type VariantPropType = keyof PlasmicCircleButton__VariantsArgs;
export const PlasmicCircleButton__VariantProps = new Array<VariantPropType>(
  "selected",
  "small"
);

export type PlasmicCircleButton__ArgsType = {};
type ArgPropType = keyof PlasmicCircleButton__ArgsType;
export const PlasmicCircleButton__ArgProps = new Array<ArgPropType>();

export type PlasmicCircleButton__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultCircleButtonProps {
  selected?: SingleBooleanChoiceArg<"selected">;
  small?: SingleBooleanChoiceArg<"small">;
  className?: string;
}

function PlasmicCircleButton__RenderFunc(props: {
  variants: PlasmicCircleButton__VariantsArgs;
  args: PlasmicCircleButton__ArgsType;
  overrides: PlasmicCircleButton__OverridesType;
  dataFetches?: PlasmicCircleButton__Fetches;
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
        [sty.root__selected]: hasVariant(variants, "selected", "selected"),
        [sty.root__small]: hasVariant(variants, "small", "small")
      })}
    >
      <BlueCircleIcon
        className={classNames(defaultcss.all, sty.svg__civLs, {
          [sty.svg__selected__civLsBIuB]: hasVariant(
            variants,
            "selected",
            "selected"
          ),
          [sty.svg__small__civLs0Znm]: hasVariant(variants, "small", "small")
        })}
        role={"img"}
      />

      {(hasVariant(variants, "selected", "selected") ? false : true) ? (
        <Add24FilledIcon
          className={classNames(defaultcss.all, sty.svg__pJ9G, {
            [sty.svg__selected__pJ9GBIuB]: hasVariant(
              variants,
              "selected",
              "selected"
            ),
            [sty.svg__small__pJ9G0Znm]: hasVariant(variants, "small", "small")
          })}
          role={"img"}
        />
      ) : null}
      {(hasVariant(variants, "selected", "selected") ? true : false) ? (
        <VectorIcon
          className={classNames(defaultcss.all, sty.svg__duhK8, {
            [sty.svg__selected__duhK8BIuB]: hasVariant(
              variants,
              "selected",
              "selected"
            )
          })}
          role={"img"}
        />
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCircleButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCircleButton__VariantsArgs;
    args?: PlasmicCircleButton__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicCircleButton__Fetches;
  } & Omit<PlasmicCircleButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCircleButton__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicCircleButton__ArgProps,
      internalVariantPropNames: PlasmicCircleButton__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicCircleButton__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCircleButton";
  } else {
    func.displayName = `PlasmicCircleButton.${nodeName}`;
  }
  return func;
}

export const PlasmicCircleButton = Object.assign(
  // Top-level PlasmicCircleButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicCircleButton
    internalVariantProps: PlasmicCircleButton__VariantProps,
    internalArgProps: PlasmicCircleButton__ArgProps
  }
);

export default PlasmicCircleButton;
/* prettier-ignore-end */
