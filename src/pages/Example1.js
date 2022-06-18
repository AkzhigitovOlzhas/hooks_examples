import React from "react";
import { useActive } from "../hooks/useActive";
import { useActiveUser } from "../hooks/useActiveUser";
import { useTimer } from "../hooks/useTimer";

export const Example1 = () => {
    const activeUserTime = useActiveUser(2000);
    const isActive = useActive(2000);
    const { time, handleStart, handleStop, reset } = useTimer();

    return (
        <div>
            <div>Кол-во активных секунд на странице: {activeUserTime}</div>

            <div style={{ background: isActive ? 'green' : 'red' }}>
                {isActive ? "Пользователь активен" : "Пользователь не активен"}
            </div>

            <div>{time}</div>

            <div>
                <button onClick={handleStart}>Start</button>
                <button onClick={handleStop}>Stop</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    );
};
