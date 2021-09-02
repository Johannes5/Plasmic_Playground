import * as React from "react";
import {useEffect, useLayoutEffect, useRef, useState} from "react";
import {useQuery, useInfiniteQuery} from "react-query"
import {useSnapshot} from "valtio"

import {DefaultSectionProps, PlasmicSection} from "./plasmic/hub_hub/PlasmicSection";
import {HTMLElementRefOf} from "@plasmicapp/react-web";
import {useGetPlaylist} from "../services/youtubeAPI";
import {useMeasure} from "../utilities/useMeasure";
import store from "../utilities/store";
import VideoItem from "./VideoItem";


// Todo 🦉  React Query (useQuery) -- -> (useInfiniteQuery)

interface SectionProps extends DefaultSectionProps {
    getPlaylist?: () => void,
    playlistClicked?: boolean
}

function Section_(props: SectionProps, ref: HTMLElementRefOf<"div">) {
    //const [childWidth, setWidth] = useState<number>()
    /*const [, updateState] = React.useState();
    //@ts-ignore
    const forceUpdate = React.useCallback(() => updateState({}), []);*/

    const {isFetchingYTPlaylist, nextPageToken} = useSnapshot(store)
    //const [nextPageToken, setNextPageToken] = useState<string>("CAoQAA")

    const maxItems = 9
    const [slicePosition, setSlicePosition] = useState<number>(0)
    const [itemSizeFactor, setItemSizeFactor] = useState<number>(1)

    const [playlist, setPlaylist] = useState<Object[]>([])
    //const playlist = useRef<Object[]>([])

    console.log("slicePosition", slicePosition)



    // Todo: const [itemSizeFactor, maxItems, (availableWidth, col#, row#, screensize, currentBreakpoint) ] = useLayoutSettings()

    const colNum: number = 3
    const gapSize: number = 12
    const defaultThumbnailWidth: number = 220

    let leftHidden = useRef<boolean>(true)
    let rightHidden = useRef<boolean>(false) //make true default, if collapsed

    if (slicePosition === 0) {
        leftHidden.current = true
        //forceUpdate()
    } else if (slicePosition > 0) {
        leftHidden.current = false
    }



    const videoRef = React.useRef<HTMLDivElement>(null)
    const contentRef = React.useRef<HTMLDivElement>(null)
    const headerRef = React.useRef<HTMLDivElement>(null)



    //function getYTPlaylist
    const playlistId: string = "PLRMlbFaO1aqNibW0_7dhYsWSWti9HIF0W" // Programming: PLRMlbFaO1aqNibW0_7dhYsWSWti9HIF0W // Timo: "PL4patPqPZcYdwzyr8jU4DbI79beMdmyFx" //"https://youtube.com/playlist?list=PL4patPqPZcYdwzyr8jU4DbI79beMdmyFx"// L-Ph: "PLRMlbFaO1aqMAL-P4F3jFNZYFG9LI4poU"
    const {isLoading, isSuccess, error, data} = useGetPlaylist(playlistId, isFetchingYTPlaylist, nextPageToken)
    //console.log("data.nextPageToken", data.nextPageToken)


    // filter private / deleted videos



    if (isSuccess) {
        console.log("isSuccess _> store.nextPageToken", store.nextPageToken)
        const moreData = data?.filter((item: { channelId: string | undefined }) => {
            return item.channelId !== undefined
        })
        //playlist.push(moreData)
        setPlaylist(moreData)
        console.log("playlist", playlist, "moreData", moreData)
    }


    //45
    if (playlist && (slicePosition + maxItems) > playlist.length) {
        //setNextPageToken(store.nextPageToken)
        //playlist.concat(data)
    }



    function round(value: number, decimals: number) {
        //@ts-ignore
        return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
    }

    let rect  = useMeasure(contentRef, [])
    //@ts-ignore
    const sectionContainerWidth: number = Math.round(rect?.width)

    // efforts to figure out the available width
    useLayoutEffect(() => {
        if (ref) {
            //console.log("ref?.current?.children[0].clientWidth", ref?.current?.children[0].children[0].clientWidth)

            console.log("sectionContainerWidth", sectionContainerWidth)
            //console.log("childWidth passed up", childWidth)

            const availableChildWidth: number = Math.round((sectionContainerWidth - (colNum - 1) * (gapSize)) / colNum)
            console.log("availableChildWidth", availableChildWidth)

            setItemSizeFactor(round((availableChildWidth / defaultThumbnailWidth), 2))
            console.log("itemSizeFactor", itemSizeFactor)


        }
    }, [ref, rect, /*childWidth*/]);



    const handleLeftArrowClick = () => {
        console.log("lefty", slicePosition)
        setSlicePosition(pos => pos -= maxItems)

        console.log("lefty after", slicePosition)
    }

    const handleRightArrowClick = () => {
        console.log("righty",slicePosition)


        setSlicePosition(pos => pos += maxItems)


        console.log("righty after",slicePosition)
    }



    //@ts-ignore
    return <PlasmicSection
        root={{ref}}
        {...props}

        sectionHeader={{ref: headerRef}}

        sectionContent={isSuccess && playlist.length > 0 && playlist.slice(slicePosition, slicePosition + maxItems).map((item: any) =>
            <VideoItem key={item.title} ref={videoRef} title={item.title} videoThumbnail={item.thumbnail}
                       channel={item.channelName}
                       itemSizeFactor={itemSizeFactor}
                       isAwaitingMetadata={false} /*setWidth={width => setWidth(width)}*//>
        )}

        sectionContentContainer={{ref: contentRef,}}
        /*sectionContentContainer={{
            wrapChildren: (children) =>
                <div ref={contentRef} style={{display: "grid", gridTemplateColumns: `repeat(${3}, 234px)`,  gap: 10}}>
                    {children}
                </div>
        }}*/

        arrows={{
            left: {onClick: handleLeftArrowClick},
            right: {onClick: handleRightArrowClick},
            leftHidden: leftHidden.current,
            rightHidden: rightHidden.current
        }}

    />;
}

const Section = React.forwardRef(Section_)
export default Section


