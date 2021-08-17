import React, {useEffect, useState} from 'react';
import './App.css';
import Section from "./components/Section";
import {ThemeContext} from './components/plasmic/hub_hub/PlasmicGlobalVariant__Theme';
import { fromEvent } from 'rxjs';



import {isConnected, handleAuthClick, getPlaylist, checkSignInStatus,  handleSignoutClick, handleClientLoad} from "./services/youtubeAPI"
import Button from "./components/Button";
import VideoItem from "./components/VideoItem";
import {useMeasureDestructured} from "./utilities/useMeasureDestructured";


let articlesArray = [
    {
        id: 1,
        title: "Secret Chinese Military Base Discovered on the Moon. Can they claim their territory?",
        titleImage: "http://www.fillmurray.com/200/140",
        source: "fillmurray.com",
        readingTime: "41 min",
        date: "Jun 21, 2020",
        snippet: "Here, we use the built in Typescript utility type Omit to help us exclude the props from DefaultButtonProps that we don’t need, and instead derive it ourselves.\n" +
            "\n" +
            "When you do this, though, you should set the corresponding withIcons prop’s “Export type” to “Internal” in Plasmic, by going to the Props tab of the component panel"
    },
    {
        id: 2,
        title: "What We’re Reading",
        titleImage: "http://www.fillmurray.com/200/160",
        source: "collaborativefund.com",
        readingTime: "4 min",
        date: "Jul 1, 2020",
        snippet: "Here, we use the built in Typescript utility type Omit to help us exclude the props from DefaultButtonProps that we don’t need, and instead derive it ourselves.\n" +
            "\n" +
            "When you do this, though, you should set the corresponding withIcons prop’s “Export type” to “Internal” in Plasmic, by going to the Props tab of the component panel"
    },
    {
        id: 3,
        title: "A Quantum Computer Future",
        titleImage: "http://www.fillmurray.com/180/130",
        source: "readmultiplex.com",
        readingTime: "14 min",
        date: "Jul 14",
        snippet: "Much like the “space race” from the 1950s-1960s we are today in a quantum computer race. Governments, universities and private companies all around the world are pouring billions of dollars into quantum research and development. From satellite-based quantum key distribution for encryption has been demonstrated, laying the groundwork for a potential quantum security"
    }
]
handleClientLoad()

function App() {
    const theme = "dark"
    const [articles, setArticles] = useState(articlesArray)
    const [playlistClicked, setplaylistClicked] = useState<boolean>(false)

    // const authorizeButton = document.getElementById("authorize-button")
    // const signoutButton = document.getElementById("signout-button")
    React.useEffect(() => {
        window.addEventListener('click', handleGetPlaylist)

        // cleanup this component
        return () => {
            window.removeEventListener('click', handleGetPlaylist)
        }
    }, [])

 /* const getPlaylistButton = document.getElementById("getPlaylist-button")
  //@ts-ignore
  const getPlaylistEvent$ = fromEvent(getPlaylistButton, 'click')
  getPlaylistEvent$.subscribe(() => console.log('Clicked!'));*/

    const handleGetPlaylist = () => {
        setplaylistClicked(true)
    }

    const sectionRef = React.useRef<HTMLDivElement>(null)
    const [rect, rectRef] = useMeasureDestructured([sectionRef])

  React.useLayoutEffect(() => {
    if (sectionRef.current){
      console.log("sectionRef.current.clientWidth", sectionRef.current.clientWidth)
    }
  })


  console.log("rect", rect)
  console.log("rectRef", rectRef)
  console.log("sectionRef", sectionRef)


    return (
        <ThemeContext.Provider value={theme}>
            <div style={{
                display: "grid",
                justifyContent: "center",
                margin: 10,
                gap: 10
            }} className="App">
                <Section ref={sectionRef} playlistClicked={playlistClicked}/>
              <div>
                <Button id={"authorize-button"} text={"Authorize"} onClick={handleAuthClick}/>
              </div>
              <div>
                <Button id={"signout-button"} text={"Sign Out"} onClick={handleSignoutClick}/>
              </div>
              <div>
                <Button id={"getPlaylist-button"} text={"get Playlist"} onClick={handleGetPlaylist}/>
              </div>
              <div>
                <Button id={"checkSignInStatus-button"} text={"check Signin Status"} onClick={checkSignInStatus}/>
              </div>
            </div>
        </ThemeContext.Provider>
    )
}

export default App;
