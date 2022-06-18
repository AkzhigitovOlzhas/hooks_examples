import { useEffect, useRef, useState } from "react";

export const useActive = (time) => {
    const [isActive, setIsActive] = useState(false)
    const timer = useRef();

    useEffect(() => {
        const events = [
            'keypress',
            'mousemove',
            'scroll',
            'click'
        ]
        const handleEvent = () => {
            setIsActive(true);

            if (timer.current) clearTimeout(timer.current)

            timer.current = setTimeout(() => {
                setIsActive(false)
            }, time)
        }

        events.forEach(event => document.addEventListener(event, handleEvent))

        return () => events.forEach(event => document.removeEventListener(event, handleEvent))
    }, [isActive, time])

    return isActive

} 