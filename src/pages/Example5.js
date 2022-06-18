import React, { useEffect, useState } from "react";

export const Example5 = () => {
    const [value, setValue] = useState("");

    useEffect(() => {
        console.log(value);
        return () => {
            console.log(value);
        }
    }, [value]);

    return (
        <div>
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    );
};
