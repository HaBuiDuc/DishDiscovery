import { apiKey } from "../utils/ApiKey"

const { useState, useEffect } = require("react")

const fetchSearch = (query, onSubmit) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const url = `https://api.spoonacular.com/recipes/complexSearch?number=12&apiKey=${apiKey}&query=${query}`
    const fetchData = async () => {
        if (onSubmit == false) {
            console.log(query);
            try {
                setIsLoading(true)
                fetch(url)
                    .then(response => response.json())
                    .then(response => setData(response.results))
                    .catch(error => console.log(error))

            } finally {
                setIsLoading(false)
            }
        }
    }

    useEffect(() => {
        fetchData()
    }, [query, onSubmit])

    const refetch = () => {
        setIsLoading(true)
        fetchData()
    }

    return { data, isLoading, error, refetch }
}

export default fetchSearch
