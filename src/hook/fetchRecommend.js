import { apiKey } from "../utils/ApiKey"

const { useState, useEffect } = require("react")

const fetchRecommend = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const url = `https://api.spoonacular.com/recipes/random?number=12&apiKey=${apiKey}`
    const fetchData = async () => {
        try {
            setIsLoading(true)
            fetch(url)
            .then(response => response.json())
            .then(response => setData(response))
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

export default fetchRecommend