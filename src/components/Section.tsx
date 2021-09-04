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

    const {isFetchingYTPlaylist,} = useSnapshot(store)
    const [nextPageToken, setNextPageToken] = useState<string>("CAoQAA")
    const [pageCount, setPageCount] = useState<number>(0)

    const maxItems = 9
    const [slicePosition, setSlicePosition] = useState<number>(0)
    const [itemSizeFactor, setItemSizeFactor] = useState<number>(1)

    const [playlist, setPlaylist] = useState<Object[]>([])
    //const playlist = useRef<Object[]>([])

    //console.log("💩")
    console.log("slicePosition", slicePosition)
    console.log("playlist", playlist)

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


    const playlistId: string = "PLRMlbFaO1aqNibW0_7dhYsWSWti9HIF0W" // Programming: PLRMlbFaO1aqNibW0_7dhYsWSWti9HIF0W // Timo: "PL4patPqPZcYdwzyr8jU4DbI79beMdmyFx" //"https://youtube.com/playlist?list=PL4patPqPZcYdwzyr8jU4DbI79beMdmyFx"// L-Ph: "PLRMlbFaO1aqMAL-P4F3jFNZYFG9LI4poU"
    const {isLoading, isSuccess, error, data} = useGetPlaylist(playlistId, isFetchingYTPlaylist, pageCount)


    // filter private / deleted videos -> add moreData to playlist
    useEffect(() => {
        if (isSuccess && data){
            console.log("isSuccess 🦄 --> store.nextPageToken", )
            console.log("data", data)
            console.log("data.pages", data.pages) //why is it not all pages?
            console.log("pageCount", pageCount)
            //@ts-ignore
            const moreData = data.pages[0]?.filter((item: { channelId: string | undefined }) => {
                return item.channelId !== undefined
            })
            console.log("moreData", moreData)
            if (playlist.length > 0) {
                setPlaylist((pl) => [ ...pl, ...moreData])
            } else {
                setPlaylist(moreData)
            }

            //playlist.current.push(moreData)
            //store.playlist.concat(moreData)
        }
    }, [data, isSuccess,])



    // fire when more youtube playlist data is needed
    useEffect(() => {
        if (playlist && (slicePosition + 2*maxItems) > playlist.length &&  (slicePosition + 2*maxItems) > 50 ) {
            console.log("about to fetch moreData 🦄",)
            setPageCount(p => ++p)
            //setNextPageToken(store.nextPageToken) //should trigger Query
        }
    },[playlist, slicePosition])


    function round(value: number, decimals: number) {
        //@ts-ignore
        return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
    }

    let rect = useMeasure(contentRef, [])
    //@ts-ignore
    const sectionContainerWidth: number = Math.round(rect?.width)

    // efforts to figure out the available width
    useEffect(() => {
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
        console.log("👈lefty", )
        setSlicePosition(pos => pos -= maxItems)

    }

    const handleRightArrowClick = () => {
        console.log("👉righty",)
        setSlicePosition(pos => pos += maxItems)

    }


    //@ts-ignore
    return <PlasmicSection
        root={{ref, style:{margin: "0 auto"}}}
        {...props}

        sectionHeader={{ref: headerRef}}

        sectionContent={isSuccess && playlist?.length > 0 && playlist.slice(slicePosition, slicePosition + maxItems).map((item: any) =>
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
//export default Section
export default React.memo(Section)


