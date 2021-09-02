// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 24qDGfvb2rMn6oy8PVF95d
// Component: Cf5D4b0Drp
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
import HeaderMenu from "../../HeaderMenu"; // plasmic-import: JEN29JpsqO/component
import SectionOld from "../../SectionOld"; // plasmic-import: xJkqcycNmP/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_hub_hub.module.css"; // plasmic-import: 24qDGfvb2rMn6oy8PVF95d/projectcss
import * as sty from "./PlasmicSections.module.css"; // plasmic-import: Cf5D4b0Drp/css

export type PlasmicSections__VariantMembers = {};

export type PlasmicSections__VariantsArgs = {};
type VariantPropType = keyof PlasmicSections__VariantsArgs;
export const PlasmicSections__VariantProps = new Array<VariantPropType>();

export type PlasmicSections__ArgsType = {};
type ArgPropType = keyof PlasmicSections__ArgsType;
export const PlasmicSections__ArgProps = new Array<ArgPropType>();

export type PlasmicSections__OverridesType = {
  root?: p.Flex<"div">;
  headerMenu?: p.Flex<typeof HeaderMenu>;
  freeBox?: p.Flex<"div">;
};

export interface DefaultSectionsProps {
  className?: string;
}

function PlasmicSections__RenderFunc(props: {
  variants: PlasmicSections__VariantsArgs;
  args: PlasmicSections__ArgsType;
  overrides: PlasmicSections__OverridesType;
  dataFetches?: PlasmicSections__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

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
          <HeaderMenu
            data-plasmic-name={"headerMenu"}
            data-plasmic-override={overrides.headerMenu}
            className={classNames("__wab_instance", sty.headerMenu)}
            hideSignUpButton={"hideSignUpButton" as const}
            variants2={"seeAllView" as const}
          />

          <p.Stack
            as={"div"}
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            hasGap={true}
            className={classNames(defaultcss.all, sty.freeBox)}
          >
            <SectionOld
              className={classNames("__wab_instance", sty.sectionOld__pv4Di)}
            />

            <SectionOld
              className={classNames("__wab_instance", sty.sectionOld__l6Qy)}
            />

            <SectionOld
              className={classNames("__wab_instance", sty.sectionOld__bDXn)}
            />

            <SectionOld
              className={classNames("__wab_instance", sty.sectionOld__rJrnr)}
            />
          </p.Stack>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "headerMenu", "freeBox"],
  headerMenu: ["headerMenu"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  headerMenu: typeof HeaderMenu;
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSections__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSections__VariantsArgs;
    args?: PlasmicSections__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicSections__Fetches;
  } & Omit<PlasmicSections__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSections__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicSections__ArgProps,
      internalVariantPropNames: PlasmicSections__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicSections__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSections";
  } else {
    func.displayName = `PlasmicSections.${nodeName}`;
  }
  return func;
}

export const PlasmicSections = Object.assign(
  // Top-level PlasmicSections renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    headerMenu: makeNodeComponent("headerMenu"),
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicSections
    internalVariantProps: PlasmicSections__VariantProps,
    internalArgProps: PlasmicSections__ArgProps
  }
);

export default PlasmicSections;
/* prettier-ignore-end */