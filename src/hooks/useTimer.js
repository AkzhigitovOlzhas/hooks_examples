import { useEffect, useState } from "react"

export const useTimer = () => {
    const [time, setTime] = useState(0)
    const [isRun, setIsRun] = useState(true)

    const handleStart = () => {
        setIsRun(true)
    }
    const handleStop = () => {
        setIsRun(false)
    }
    const reset = () => {
        setTime(0)
    }

    useEffect(() => {
        if (isRun) {
            const interval = setInterval(() => {
                setTime(prev => prev + 1)
            }, 1000);

            return () => clearInterval(interval)
        }
    }, [isRun])

    return { time, handleStart, handleStop, reset }
}