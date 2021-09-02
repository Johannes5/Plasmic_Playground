import * as React from "react";
import {
  PlasmicSection,
  DefaultSectionProps
} from "./plasmic/hub_hub/PlasmicSection";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import {forwardRef, useEffect, useImperativeHandle, useLayoutEffect, useRef, useState} from "react";
import {getPlaylist, handleAuthClick} from "../services/youtubeAPI";
import VideoItem from "./VideoItem";
import {useMeasure} from "../utilities/useMeasure";

interface SectionProps extends DefaultSectionProps {
  getPlaylist?: () => void,
  playlistClicked: boolean
}

function Section_(props: SectionProps , ref: HTMLElementRefOf<"div">) {
  const [playlist, setPlaylist] = useState([])

  useEffect(() => {
    if(props.playlistClicked === true){
      handleGetPlaylist()
    }
  },[props.playlistClicked])

  let rect = useMeasure(ref,[])



  useLayoutEffect(() => {
    if (ref) {
      //@ts-ignore
      console.log("ref?.current?.children[0].clientWidth", ref?.current?.children[0].clientWidth)
      //@ts-ignore
      rect && console.log("width", Math.round(rect.width))
      console.log("ref", ref)

    }
  },[]);


  const handleGetPlaylist = async() => {
    const playlistId = "PLRMlbFaO1aqMAL-P4F3jFNZYFG9LI4poU" // Timo: "PL4patPqPZcYdwzyr8jU4DbI79beMdmyFx" //"https://youtube.com/playlist?list=PL4patPqPZcYdwzyr8jU4DbI79beMdmyFx"// Meins: "PLRMlbFaO1aqMAL-P4F3jFNZYFG9LI4poU"
    const playlist = await getPlaylist(playlistId)
    console.log("handleGetPlaylist", )
    setPlaylist(playlist)
    console.log("playlist", playlist)
  }

//@ts-ignore
  return <PlasmicSection
      root={{ ref }}
      {...props}

      sectionContent={playlist && playlist.length > 0 && playlist.map((item) =>
          //@ts-ignore
          <VideoItem title={item.title} isAwaitingMetadata={false}/>
      )}

      sectionContentContainer={{}}
  />;
}

const Section = React.forwardRef(Section_);
export default Section


