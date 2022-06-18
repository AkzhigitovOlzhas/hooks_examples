import { useEffect } from "react"
import { useActive } from "./useActive"
import { useTimer } from "./useTimer"

export const useActiveUser = (timeout) => {
    const { time, handleStart, handleStop } = useTimer()
    const isActive = useActive(timeout)

    useEffect(() => {
        if (isActive) {
            handleStart()
        } else {
            handleStop()
        }
    }, [isActive, handleStart, handleStop])

    return time;
}