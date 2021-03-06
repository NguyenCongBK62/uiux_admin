import React from 'react';

const useTimer = (initialState = 0) => {
    const [timer, setTimer] = React.useState(initialState)
    const [isActive, setIsActive] = React.useState(false)
    const [isPaused, setIsPaused] = React.useState(false)
    const countRef = React.useRef(null)

    const handleStart = () => {
        setIsActive(true);
        setIsPaused(true);
        countRef.current = setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000);
    }

    const handlePause = () => {
        clearInterval(countRef.current);
        setIsPaused(true);
    }

    const handleResume = () => {
        setIsPaused(true);
        setTimer(0);
        clearInterval(countRef.current);
        countRef.current = setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000);
    }

    const handleReset = () => {
        clearInterval(countRef.current)
        setIsActive(false)
        setIsPaused(false)
        setTimer(0)
    }

    return { timer, isActive, isPaused, handleStart, handlePause, handleResume, handleReset }
}

export default useTimer;
