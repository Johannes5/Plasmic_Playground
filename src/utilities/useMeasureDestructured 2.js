import {useLayoutEffect, useRef, useState} from "react";

export const useMeasureDestructured = (deps) => {
    const [rect, setRect] = useState({});
    const rectRef = useRef()

    useLayoutEffect(() => {
        setRect(rectRef?.current?.getBoundingClientRect()); //ts would not allow this. may be undefined
    }, deps);

    return [rect, rectRef]
}
