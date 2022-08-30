import React, {useEffect, useState} from 'react'
import SortItem from './SortItem'
import Head from 'next/head'
import {supabase} from '../utils/supabaseClient'
import ArticleItem from './ArticleItem'

function CategorieLayout({children, title, data, catFor}) {

    if(data && data.length === 0) data = undefined

    const [contentData, setContentData] = useState(data)

    async function updateData(type, order){  
        let { data: Articles, error } = await supabase
            .from('Articles')
            .select('*')
            .match({category:catFor, reviewed:true})
            .order('created_at', { ascending: order })

        setContentData(Articles)
    }

    

  return (
    <div className='flex w-full items-center flex-col min-h-screen'>
        <Head>
            <title>OBSESSIVE</title>
        </Head>
        <div className="h-full max-w-[1000px] lg:w-3/5 w-[98%] pt-8">
            <div className="flex sm:flex-row flex-col justify-between items-baseline">
                <h1 className='text-start text-4xl font-serif'>{title}</h1>
                <div className="flex text-md space-x-3">
                    <SortItem name={'Newest'} update={updateData} type="chrono" des={true}/>
                    <SortItem name={'Most views'} update={updateData} type="views" des={true}/>
                </div>
            </div>
            <div className='w-full h-[2px] mt-2 bg-black'></div>

            <div className="w-full h-auto pt-5 space-y-4">
                {   
                    contentData?.map((item, i) => (
                        <ArticleItem key={i} id={item.id} title={item.title} desc={item.description} img={item.img} views={item.views}/>
                    ))
                }
                {
                    !contentData &&  
                    <div className="w-full text-center">
                        <h1 className='text-3xl font-serif'>No posts yet...</h1>
                    </div>
                }
            </div>

        </div>
    </div>
  )
}



export default CategorieLayout