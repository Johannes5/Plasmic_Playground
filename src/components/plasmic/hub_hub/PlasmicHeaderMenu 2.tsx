// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 24qDGfvb2rMn6oy8PVF95d
// Component: JEN29JpsqO
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
import ListGridSwitch from "../../ListGridSwitch"; // plasmic-import: n9Vx5RIblr/component
import OptionsIcon from "../../OptionsIcon"; // plasmic-import: 1-oouZ2-GW/component

import { ThemeValue, useTheme } from "./PlasmicGlobalVariant__Theme"; // plasmic-import: 40N_XXvhaC/globalVariant
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: X6JbprEhruOi/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_hub_hub.module.css"; // plasmic-import: 24qDGfvb2rMn6oy8PVF95d/projectcss
import * as sty from "./PlasmicHeaderMenu.module.css"; // plasmic-import: JEN29JpsqO/css

import Ellipse20Icon from "./icons/PlasmicIcon__Ellipse20"; // plasmic-import: 3F0byvy2ZY/icon
import Edit24RegularIcon from "./icons/PlasmicIcon__Edit24Regular"; // plasmic-import: Y_g-OeXgGm/icon
import Group71Icon from "./icons/PlasmicIcon__Group71"; // plasmic-import: GiQOkXfyPfb/icon

export type PlasmicHeaderMenu__VariantMembers = {
  variants2: "seeAllView" | "sectionView";
  hideSignUpButton: "hideSignUpButton";
};

export type PlasmicHeaderMenu__VariantsArgs = {
  variants2?: SingleChoiceArg<"seeAllView" | "sectionView">;
  hideSignUpButton?: SingleBooleanChoiceArg<"hideSignUpButton">;
};

type VariantPropType = keyof PlasmicHeaderMenu__VariantsArgs;
export const PlasmicHeaderMenu__VariantProps = new Array<VariantPropType>(
  "variants2",
  "hideSignUpButton"
);

export type PlasmicHeaderMenu__ArgsType = {};
type ArgPropType = keyof PlasmicHeaderMenu__ArgsType;
export const PlasmicHeaderMenu__ArgProps = new Array<ArgPropType>();

export type PlasmicHeaderMenu__OverridesType = {
  root?: p.Flex<"div">;
  property1SeeAllViewMenuListProperty2List?: p.Flex<"div">;
  signUpButton?: p.Flex<"div">;
  buttonDefault?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  group72?: p.Flex<"div">;
  group68?: p.Flex<"div">;
  rectangle25?: p.Flex<"div">;
  rectangle26?: p.Flex<"div">;
  group69?: p.Flex<"div">;
  rectangle262?: p.Flex<"div">;
  editButton?: p.Flex<"div">;
  optionsIcon?: p.Flex<typeof OptionsIcon>;
};

export interface DefaultHeaderMenuProps {
  variants2?: SingleChoiceArg<"seeAllView" | "sectionView">;
  hideSignUpButton?: SingleBooleanChoiceArg<"hideSignUpButton">;
  className?: string;
}

function PlasmicHeaderMenu__RenderFunc(props: {
  variants: PlasmicHeaderMenu__VariantsArgs;
  args: PlasmicHeaderMenu__ArgsType;
  overrides: PlasmicHeaderMenu__OverridesType;
  dataFetches?: PlasmicHeaderMenu__Fetches;
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
      <p.Stack
        as={"div"}
        data-plasmic-name={"property1SeeAllViewMenuListProperty2List"}
        data-plasmic-override={
          overrides.property1SeeAllViewMenuListProperty2List
        }
        hasGap={true}
        className={classNames(
          defaultcss.all,
          sty.property1SeeAllViewMenuListProperty2List,
          {
            [sty.property1SeeAllViewMenuListProperty2List__global_theme_dark]:
              hasVariant(globalVariants, "theme", "dark"),
            [sty.property1SeeAllViewMenuListProperty2List__hideSignUpButton]:
              hasVariant(variants, "hideSignUpButton", "hideSignUpButton"),
            [sty.property1SeeAllViewMenuListProperty2List__variants2_seeAllView]:
              hasVariant(variants, "variants2", "seeAllView")
          }
        )}
      >
        {(
          hasVariant(variants, "hideSignUpButton", "hideSignUpButton")
            ? false
            : true
        ) ? (
          <div
            data-plasmic-name={"signUpButton"}
            data-plasmic-override={overrides.signUpButton}
            className={classNames(defaultcss.all, sty.signUpButton, {
              [sty.signUpButton__hideSignUpButton]: hasVariant(
                variants,
                "hideSignUpButton",
                "hideSignUpButton"
              )
            })}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"buttonDefault"}
              data-plasmic-override={overrides.buttonDefault}
              hasGap={true}
              className={classNames(defaultcss.all, sty.buttonDefault, {
                [sty.buttonDefault__hideSignUpButton]: hasVariant(
                  variants,
                  "hideSignUpButton",
                  "hideSignUpButton"
                )
              })}
            >
              <div
                data-plasmic-name={"freeBox"}
                data-plasmic-override={overrides.freeBox}
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.freeBox,
                  {
                    [sty.freeBox__hideSignUpButton]: hasVariant(
                      variants,
                      "hideSignUpButton",
                      "hideSignUpButton"
                    )
                  }
                )}
              >
                {"Sign Up"}
              </div>
            </p.Stack>
          </div>
        ) : null}
        {false ? (
          <div
            data-plasmic-name={"group72"}
            data-plasmic-override={overrides.group72}
            className={classNames(defaultcss.all, sty.group72)}
          >
            <div
              data-plasmic-name={"group68"}
              data-plasmic-override={overrides.group68}
              className={classNames(defaultcss.all, sty.group68)}
            >
              <div
                data-plasmic-name={"rectangle25"}
                data-plasmic-override={overrides.rectangle25}
                className={classNames(defaultcss.all, sty.rectangle25)}
              />

              <div
                data-plasmic-name={"rectangle26"}
                data-plasmic-override={overrides.rectangle26}
                className={classNames(defaultcss.all, sty.rectangle26)}
              />
            </div>

            <div
              data-plasmic-name={"group69"}
              data-plasmic-override={overrides.group69}
              className={classNames(defaultcss.all, sty.group69)}
            >
              <div
                data-plasmic-name={"rectangle262"}
                data-plasmic-override={overrides.rectangle262}
                className={classNames(defaultcss.all, sty.rectangle262)}
              />
            </div>
          </div>
        ) : null}
        {false ? (
          <div
            data-plasmic-name={"editButton"}
            data-plasmic-override={overrides.editButton}
            className={classNames(defaultcss.all, sty.editButton)}
          >
            <Ellipse20Icon
              className={classNames(defaultcss.all, sty.svg___4JcJs)}
              role={"img"}
            />

            <Edit24RegularIcon
              className={classNames(defaultcss.all, sty.svg__yZ81Z)}
              role={"img"}
            />
          </div>
        ) : null}
        {(hasVariant(variants, "variants2", "seeAllView") ? true : false) ? (
          <ListGridSwitch
            className={classNames("__wab_instance", sty.listGridSwitch__gmE0H, {
              [sty.listGridSwitch__variants2_seeAllView__gmE0HUP4Y]: hasVariant(
                variants,
                "variants2",
                "seeAllView"
              )
            })}
            listGrid={
              hasVariant(variants, "variants2", "seeAllView")
                ? ["grid"]
                : hasVariant(globalVariants, "screen", "mobileOnly")
                ? []
                : undefined
            }
          />
        ) : null}

        <OptionsIcon
          data-plasmic-name={"optionsIcon"}
          data-plasmic-override={overrides.optionsIcon}
          className={classNames("__wab_instance", sty.optionsIcon, {
            [sty.optionsIcon__global_theme_dark]: hasVariant(
              globalVariants,
              "theme",
              "dark"
            ),
            [sty.optionsIcon__variants2_sectionView]: hasVariant(
              variants,
              "variants2",
              "sectionView"
            ),
            [sty.optionsIcon__variants2_seeAllView]: hasVariant(
              variants,
              "variants2",
              "seeAllView"
            )
          })}
          variants2={
            hasVariant(variants, "variants2", "sectionView")
              ? ("sectionView" as const)
              : ("seeAllViewRed" as const)
          }
        />

        <Group71Icon
          className={classNames(defaultcss.all, sty.svg__qdWA, {
            [sty.svg__global_theme_dark__qdWAoIz4X]: hasVariant(
              globalVariants,
              "theme",
              "dark"
            )
          })}
          role={"img"}
        />
      </p.Stack>

      <ListGridSwitch
        className={classNames("__wab_instance", sty.listGridSwitch__i4SF)}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "property1SeeAllViewMenuListProperty2List",
    "signUpButton",
    "buttonDefault",
    "freeBox",
    "group72",
    "group68",
    "rectangle25",
    "rectangle26",
    "group69",
    "rectangle262",
    "editButton",
    "optionsIcon"
  ],
  property1SeeAllViewMenuListProperty2List: [
    "property1SeeAllViewMenuListProperty2List",
    "signUpButton",
    "buttonDefault",
    "freeBox",
    "group72",
    "group68",
    "rectangle25",
    "rectangle26",
    "group69",
    "rectangle262",
    "editButton",
    "optionsIcon"
  ],
  signUpButton: ["signUpButton", "buttonDefault", "freeBox"],
  buttonDefault: ["buttonDefault", "freeBox"],
  freeBox: ["freeBox"],
  group72: [
    "group72",
    "group68",
    "rectangle25",
    "rectangle26",
    "group69",
    "rectangle262"
  ],
  group68: ["group68", "rectangle25", "rectangle26"],
  rectangle25: ["rectangle25"],
  rectangle26: ["rectangle26"],
  group69: ["group69", "rectangle262"],
  rectangle262: ["rectangle262"],
  editButton: ["editButton"],
  optionsIcon: ["optionsIcon"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  property1SeeAllViewMenuListProperty2List: "div";
  signUpButton: "div";
  buttonDefault: "div";
  freeBox: "div";
  group72: "div";
  group68: "div";
  rectangle25: "div";
  rectangle26: "div";
  group69: "div";
  rectangle262: "div";
  editButton: "div";
  optionsIcon: typeof OptionsIcon;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeaderMenu__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeaderMenu__VariantsArgs;
    args?: PlasmicHeaderMenu__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicHeaderMenu__Fetches;
  } & Omit<PlasmicHeaderMenu__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHeaderMenu__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicHeaderMenu__ArgProps,
      internalVariantPropNames: PlasmicHeaderMenu__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicHeaderMenu__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeaderMenu";
  } else {
    func.displayName = `PlasmicHeaderMenu.${nodeName}`;
  }
  return func;
}

export const PlasmicHeaderMenu = Object.assign(
  // Top-level PlasmicHeaderMenu renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    property1SeeAllViewMenuListProperty2List: makeNodeComponent(
      "property1SeeAllViewMenuListProperty2List"
    ),
    signUpButton: makeNodeComponent("signUpButton"),
    buttonDefault: makeNodeComponent("buttonDefault"),
    freeBox: makeNodeComponent("freeBox"),
    group72: makeNodeComponent("group72"),
    group68: makeNodeComponent("group68"),
    rectangle25: makeNodeComponent("rectangle25"),
    rectangle26: makeNodeComponent("rectangle26"),
    group69: makeNodeComponent("group69"),
    rectangle262: makeNodeComponent("rectangle262"),
    editButton: makeNodeComponent("editButton"),
    optionsIcon: makeNodeComponent("optionsIcon"),

    // Metadata about props expected for PlasmicHeaderMenu
    internalVariantProps: PlasmicHeaderMenu__VariantProps,
    internalArgProps: PlasmicHeaderMenu__ArgProps
  }
);

export default PlasmicHeaderMenu;
/* prettier-ignore-end */
