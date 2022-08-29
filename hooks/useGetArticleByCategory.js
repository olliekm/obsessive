import React, {useEffect, useState} from 'react'
import { supabase } from '../utils/supabaseClient'

function useGetArticleByCategory(category) {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(async () => {
        setLoading(true)
        const { data, error } = await supabase
        .from('Articles')
        .match({category:category, reviewed:true})
        .order('created_at', { ascending: false })
        .select()
    }, [])
    console.log(data)
    return {data, loading, error}
}

export default useGetArticleByCategory