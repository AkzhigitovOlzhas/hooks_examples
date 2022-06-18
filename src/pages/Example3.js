import React from "react";
import { useFetch } from "../hooks/useFetch";

export const Example3 = () => {
    const { data, error, loading } = useFetch('https://jsonplaceholder.typicode.com/posts#')

    if (error) {
        return <div>{error}</div>
    }

    if (loading) {
        return <div>Loading...</div>
    }


    return (
        <div>
            {
                loading ? "Loading" : <div>
                    {data.map((el) =>
                        <div key={el.id}>{el.title}</div>)
                    }
                </div>
            }
        </div>
    );
};
