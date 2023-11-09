import { useEffect, useState } from "react"
import { apiKey } from "../utils/ApiKey"

const fetchSearchAC = (query) => {
    const [searchText, setSearchText] = useState('');
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const url = `https://api.spoonacular.com/recipes/autocomplete?query=${query}&apiKey=${apiKey}&number=5`
        const fetchData = async () => {
            try {
                setIsLoading(true)
                fetch(url)
                    .then(response => response.json())
                    .then(response => setData(response))
                    .catch(error => console.log(error))
            } finally {
                // console.log(data);
                setIsLoading(false)
            }
        }
        const delayDebounceFn = setTimeout(() => {
            fetchData();
        }, 500);

        return () => clearTimeout(delayDebounceFn);
    }, [query])

    const refetch = () => {
        setIsLoading(true)
        fetchData()
    }

    return { data, isLoading, error, refetch }
}

export default fetchSearchAC