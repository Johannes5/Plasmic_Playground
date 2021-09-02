// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 24qDGfvb2rMn6oy8PVF95d
// Component: xJkqcycNmP
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
import SectionHeader from "../../SectionHeader"; // plasmic-import: Isc1ACYDLI/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_hub_hub.module.css"; // plasmic-import: 24qDGfvb2rMn6oy8PVF95d/projectcss
import * as sty from "./PlasmicSectionOld.module.css"; // plasmic-import: xJkqcycNmP/css

import IconsSourcesYoutubeIcon from "./icons/PlasmicIcon__IconsSourcesYoutube"; // plasmic-import: 9FfsM2N0XvJ/icon
import ProgressbarIcon from "./icons/PlasmicIcon__Progressbar"; // plasmic-import: OlLsdl8YS4/icon

export type PlasmicSectionOld__VariantMembers = {};

export type PlasmicSectionOld__VariantsArgs = {};
type VariantPropType = keyof PlasmicSectionOld__VariantsArgs;
export const PlasmicSectionOld__VariantProps = new Array<VariantPropType>();

export type PlasmicSectionOld__ArgsType = {};
type ArgPropType = keyof PlasmicSectionOld__ArgsType;
export const PlasmicSectionOld__ArgProps = new Array<ArgPropType>();

export type PlasmicSectionOld__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof SectionHeader>;
  frame201?: p.Flex<"div">;
  contentVideo?: p.Flex<"div">;
  videoThumbnail?: p.Flex<"div">;
  videoLengthContainer?: p.Flex<"div">;
  videoData?: p.Flex<"div">;
  whySheWontLickYourBallsAndWhatYouCanDo?: p.Flex<"div">;
  videoMetaData?: p.Flex<"div">;
  contentVideo2?: p.Flex<"div">;
  videoThumbnail2?: p.Flex<"div">;
  videoLengthContainer2?: p.Flex<"div">;
  videoData2?: p.Flex<"div">;
  the10MostAweInspiringWorksOfArt?: p.Flex<"div">;
  videoMetaData2?: p.Flex<"div">;
  contentVideo3?: p.Flex<"div">;
  videoThumbnail3?: p.Flex<"div">;
  videoLengthContainer3?: p.Flex<"div">;
  videoData3?: p.Flex<"div">;
  videoMetaData3?: p.Flex<"div">;
};

export interface DefaultSectionOldProps {
  className?: string;
}

function PlasmicSectionOld__RenderFunc(props: {
  variants: PlasmicSectionOld__VariantsArgs;
  args: PlasmicSectionOld__ArgsType;
  overrides: PlasmicSectionOld__OverridesType;
  dataFetches?: PlasmicSectionOld__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <SectionHeader
        data-plasmic-name={"header"}
        data-plasmic-override={overrides.header}
        className={classNames("__wab_instance", sty.header)}
        state={"defualt" as const}
      />

      <p.Stack
        as={"div"}
        data-plasmic-name={"frame201"}
        data-plasmic-override={overrides.frame201}
        hasGap={true}
        className={classNames(defaultcss.all, sty.frame201)}
      >
        <div
          data-plasmic-name={"contentVideo"}
          data-plasmic-override={overrides.contentVideo}
          className={classNames(defaultcss.all, sty.contentVideo)}
        >
          <div
            data-plasmic-name={"videoThumbnail"}
            data-plasmic-override={overrides.videoThumbnail}
            className={classNames(defaultcss.all, sty.videoThumbnail)}
          />

          <p.Stack
            as={"div"}
            data-plasmic-name={"videoLengthContainer"}
            data-plasmic-override={overrides.videoLengthContainer}
            hasGap={true}
            className={classNames(defaultcss.all, sty.videoLengthContainer)}
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.freeBox__wjm5
              )}
            >
              {"11:11"}
            </div>
          </p.Stack>

          <p.Stack
            as={"div"}
            data-plasmic-name={"videoData"}
            data-plasmic-override={overrides.videoData}
            hasGap={true}
            className={classNames(defaultcss.all, sty.videoData)}
          >
            <div
              data-plasmic-name={"whySheWontLickYourBallsAndWhatYouCanDo"}
              data-plasmic-override={
                overrides.whySheWontLickYourBallsAndWhatYouCanDo
              }
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.whySheWontLickYourBallsAndWhatYouCanDo
              )}
            >
              {"The Sophisticated Mating Rituals of Squirrels"}
            </div>

            <div
              data-plasmic-name={"videoMetaData"}
              data-plasmic-override={overrides.videoMetaData}
              className={classNames(defaultcss.all, sty.videoMetaData)}
            >
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.freeBox__dTr93
                )}
              >
                {"BestChannel"}
              </div>

              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.freeBox___3KCc
                )}
              >
                {"20K views  -  2 weeks ago"}
              </div>
            </div>
          </p.Stack>

          {false ? (
            <ProgressbarIcon
              className={classNames(defaultcss.all, sty.svg___0Uo1A)}
              role={"img"}
            />
          ) : null}
        </div>

        <div
          data-plasmic-name={"contentVideo2"}
          data-plasmic-override={overrides.contentVideo2}
          className={classNames(defaultcss.all, sty.contentVideo2)}
        >
          <div
            data-plasmic-name={"videoThumbnail2"}
            data-plasmic-override={overrides.videoThumbnail2}
            className={classNames(defaultcss.all, sty.videoThumbnail2)}
          />

          <p.Stack
            as={"div"}
            data-plasmic-name={"videoLengthContainer2"}
            data-plasmic-override={overrides.videoLengthContainer2}
            hasGap={true}
            className={classNames(defaultcss.all, sty.videoLengthContainer2)}
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.freeBox___1T3ZS
              )}
            >
              {"11:11"}
            </div>
          </p.Stack>

          <p.Stack
            as={"div"}
            data-plasmic-name={"videoData2"}
            data-plasmic-override={overrides.videoData2}
            hasGap={true}
            className={classNames(defaultcss.all, sty.videoData2)}
          >
            <div
              data-plasmic-name={"the10MostAweInspiringWorksOfArt"}
              data-plasmic-override={overrides.the10MostAweInspiringWorksOfArt}
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.the10MostAweInspiringWorksOfArt
              )}
            >
              {"The 10 Most Awe Inspiring Works of Art "}
            </div>

            <div
              data-plasmic-name={"videoMetaData2"}
              data-plasmic-override={overrides.videoMetaData2}
              className={classNames(defaultcss.all, sty.videoMetaData2)}
            >
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.freeBox__jGadC
                )}
              >
                {"DesignChannel"}
              </div>

              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.freeBox__usctX
                )}
              >
                {"20K views  -  2 weeks ago"}
              </div>
            </div>
          </p.Stack>

          {false ? (
            <ProgressbarIcon
              className={classNames(defaultcss.all, sty.svg__sZoEf)}
              role={"img"}
            />
          ) : null}
        </div>

        <div
          data-plasmic-name={"contentVideo3"}
          data-plasmic-override={overrides.contentVideo3}
          className={classNames(defaultcss.all, sty.contentVideo3)}
        >
          <div
            data-plasmic-name={"videoThumbnail3"}
            data-plasmic-override={overrides.videoThumbnail3}
            className={classNames(defaultcss.all, sty.videoThumbnail3)}
          />

          <p.Stack
            as={"div"}
            data-plasmic-name={"videoLengthContainer3"}
            data-plasmic-override={overrides.videoLengthContainer3}
            hasGap={true}
            className={classNames(defaultcss.all, sty.videoLengthContainer3)}
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.freeBox__sPpEx
              )}
            >
              {"11:11"}
            </div>
          </p.Stack>

          <p.Stack
            as={"div"}
            data-plasmic-name={"videoData3"}
            data-plasmic-override={overrides.videoData3}
            hasGap={true}
            className={classNames(defaultcss.all, sty.videoData3)}
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.freeBox__efEib
              )}
            >
              {"Your desk could be more aesthetically pleasing"}
            </div>

            <div
              data-plasmic-name={"videoMetaData3"}
              data-plasmic-override={overrides.videoMetaData3}
              className={classNames(defaultcss.all, sty.videoMetaData3)}
            >
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.freeBox__uo0Aj
                )}
              >
                {"OCD Porn"}
              </div>

              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.freeBox__d3RA2
                )}
              >
                {"20K views  -  2 weeks ago"}
              </div>
            </div>
          </p.Stack>

          {false ? (
            <ProgressbarIcon
              className={classNames(defaultcss.all, sty.svg__gHifK)}
              role={"img"}
            />
          ) : null}
        </div>
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "frame201",
    "contentVideo",
    "videoThumbnail",
    "videoLengthContainer",
    "videoData",
    "whySheWontLickYourBallsAndWhatYouCanDo",
    "videoMetaData",
    "contentVideo2",
    "videoThumbnail2",
    "videoLengthContainer2",
    "videoData2",
    "the10MostAweInspiringWorksOfArt",
    "videoMetaData2",
    "contentVideo3",
    "videoThumbnail3",
    "videoLengthContainer3",
    "videoData3",
    "videoMetaData3"
  ],
  header: ["header"],
  frame201: [
    "frame201",
    "contentVideo",
    "videoThumbnail",
    "videoLengthContainer",
    "videoData",
    "whySheWontLickYourBallsAndWhatYouCanDo",
    "videoMetaData",
    "contentVideo2",
    "videoThumbnail2",
    "videoLengthContainer2",
    "videoData2",
    "the10MostAweInspiringWorksOfArt",
    "videoMetaData2",
    "contentVideo3",
    "videoThumbnail3",
    "videoLengthContainer3",
    "videoData3",
    "videoMetaData3"
  ],
  contentVideo: [
    "contentVideo",
    "videoThumbnail",
    "videoLengthContainer",
    "videoData",
    "whySheWontLickYourBallsAndWhatYouCanDo",
    "videoMetaData"
  ],
  videoThumbnail: ["videoThumbnail"],
  videoLengthContainer: ["videoLengthContainer"],
  videoData: [
    "videoData",
    "whySheWontLickYourBallsAndWhatYouCanDo",
    "videoMetaData"
  ],
  whySheWontLickYourBallsAndWhatYouCanDo: [
    "whySheWontLickYourBallsAndWhatYouCanDo"
  ],
  videoMetaData: ["videoMetaData"],
  contentVideo2: [
    "contentVideo2",
    "videoThumbnail2",
    "videoLengthContainer2",
    "videoData2",
    "the10MostAweInspiringWorksOfArt",
    "videoMetaData2"
  ],
  videoThumbnail2: ["videoThumbnail2"],
  videoLengthContainer2: ["videoLengthContainer2"],
  videoData2: [
    "videoData2",
    "the10MostAweInspiringWorksOfArt",
    "videoMetaData2"
  ],
  the10MostAweInspiringWorksOfArt: ["the10MostAweInspiringWorksOfArt"],
  videoMetaData2: ["videoMetaData2"],
  contentVideo3: [
    "contentVideo3",
    "videoThumbnail3",
    "videoLengthContainer3",
    "videoData3",
    "videoMetaData3"
  ],
  videoThumbnail3: ["videoThumbnail3"],
  videoLengthContainer3: ["videoLengthContainer3"],
  videoData3: ["videoData3", "videoMetaData3"],
  videoMetaData3: ["videoMetaData3"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof SectionHeader;
  frame201: "div";
  contentVideo: "div";
  videoThumbnail: "div";
  videoLengthContainer: "div";
  videoData: "div";
  whySheWontLickYourBallsAndWhatYouCanDo: "div";
  videoMetaData: "div";
  contentVideo2: "div";
  videoThumbnail2: "div";
  videoLengthContainer2: "div";
  videoData2: "div";
  the10MostAweInspiringWorksOfArt: "div";
  videoMetaData2: "div";
  contentVideo3: "div";
  videoThumbnail3: "div";
  videoLengthContainer3: "div";
  videoData3: "div";
  videoMetaData3: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSectionOld__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSectionOld__VariantsArgs;
    args?: PlasmicSectionOld__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicSectionOld__Fetches;
  } & Omit<PlasmicSectionOld__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSectionOld__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicSectionOld__ArgProps,
      internalVariantPropNames: PlasmicSectionOld__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicSectionOld__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSectionOld";
  } else {
    func.displayName = `PlasmicSectionOld.${nodeName}`;
  }
  return func;
}

export const PlasmicSectionOld = Object.assign(
  // Top-level PlasmicSectionOld renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    frame201: makeNodeComponent("frame201"),
    contentVideo: makeNodeComponent("contentVideo"),
    videoThumbnail: makeNodeComponent("videoThumbnail"),
    videoLengthContainer: makeNodeComponent("videoLengthContainer"),
    videoData: makeNodeComponent("videoData"),
    whySheWontLickYourBallsAndWhatYouCanDo: makeNodeComponent(
      "whySheWontLickYourBallsAndWhatYouCanDo"
    ),
    videoMetaData: makeNodeComponent("videoMetaData"),
    contentVideo2: makeNodeComponent("contentVideo2"),
    videoThumbnail2: makeNodeComponent("videoThumbnail2"),
    videoLengthContainer2: makeNodeComponent("videoLengthContainer2"),
    videoData2: makeNodeComponent("videoData2"),
    the10MostAweInspiringWorksOfArt: makeNodeComponent(
      "the10MostAweInspiringWorksOfArt"
    ),
    videoMetaData2: makeNodeComponent("videoMetaData2"),
    contentVideo3: makeNodeComponent("contentVideo3"),
    videoThumbnail3: makeNodeComponent("videoThumbnail3"),
    videoLengthContainer3: makeNodeComponent("videoLengthContainer3"),
    videoData3: makeNodeComponent("videoData3"),
    videoMetaData3: makeNodeComponent("videoMetaData3"),

    // Metadata about props expected for PlasmicSectionOld
    internalVariantProps: PlasmicSectionOld__VariantProps,
    internalArgProps: PlasmicSectionOld__ArgProps
  }
);

export default PlasmicSectionOld;
/* prettier-ignore-end */
