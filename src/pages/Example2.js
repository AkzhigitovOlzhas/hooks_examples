import React, { useEffect, useRef } from "react";

export const Example2 = () => {
    const ref = useRef(null);

    useEffect(() => {
        ref.current.focus();
        console.log(ref.current);
    }, [])

    return (
        <div>
            <input ref={ref} />
        </div>
    );
};
