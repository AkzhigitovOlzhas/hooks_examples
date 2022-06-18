import { useCallback, useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('')

    const fetchData = useCallback(
        async () => {
            try {
                setLoading(true)
                const response = await fetch(url);
                const data = await response.json();
                setData(data);
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        },
        [url],
    )

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return { data, loading, error }
}