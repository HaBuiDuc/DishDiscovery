import { apiKey } from "../utils/ApiKey"

const { useEffect, useState } = require("react")

const fetchByCategory = (category) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&type=${category}`
    const fetchData = async () => {
        try {
            setIsLoading(true)
            fetch(url)
            .then(response => response.json())
            .then(response => setData(response.results))
            .catch(error => console.log(error))
            
        }finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const refetch = () => {
        setIsLoading(true)
        fetchData()
    }

    return { data, isLoading, error, refetch }
}

export default fetchByCategory