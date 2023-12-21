import { apiKey } from "../utils/ApiKey"

const { useEffect, useState } = require("react")

const fetchWeekMealPlanner = (userHash) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const currentDate = new Date().toLocaleDateString('en-CA');
    const url = `https://api.spoonacular.com/mealplanner/dsky/week/${currentDate}?apiKey=${apiKey}&hash=${userHash}`
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

export default fetchWeekMealPlanner