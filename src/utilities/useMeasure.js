import {useState, useLayoutEffect} from "react"

export const useMeasure = (ref, deps) => {

    const [rect, setRect] = useState({})

    useLayoutEffect(() => {
        setRect(ref?.current?.getBoundingClientRect())
    },  deps, ref);
    //console.log("rect type:", typeof rect)
    return rect //?
}


