import React, {useEffect, useState} from 'react'
import { supabase } from '../utils/supabaseClient'

function useGetArticles(category) {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(async () => {
        setLoading(true)
        const { data, error } = await supabase
        .from('Articles')
        .select()
    }, [])
    console.log(data)
    return {data, loading, error}
}

export default useGetArticles