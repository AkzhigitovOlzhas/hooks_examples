import React, { useEffect, useState } from "react";

export const Example4 = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setTime(prev => prev + 1);
        }, 1000);
        return () => clearInterval(id);
    }, []);

    return (
        <div>
            {time}
        </div>
    );
};
