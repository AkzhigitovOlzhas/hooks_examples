import React, { useEffect, useState } from "react";

export const Example6 = () => {
    const [value, setValue] = useState(0);
    const [name, setName] = useState("");

    const sqrt = value * value;

    return (
        <div>
            <div>sqrt: {sqrt}</div>
            <input value={value} onChange={(e) => setValue(+e.target.value)} />
            <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    );
};
