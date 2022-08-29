import React from 'react'
import Link from 'next/link'
import {useGetArticleByCategory} from '../hooks/useGetArticleByCategory'

function Section({title, link}) {
  

  return (
    <div className="w-full flex-col flex items-center p-16 overflow-x-hidden">
        <div className='xl:max-w-screen-xl w-[100%] h-96 justify-start flex space-x-10 overflow-x-scroll'>
            <div className="w-[48rem] shrink-0 bg-gray-200 h-full overflow-hidden flex  items-center relative">
                <div className="absolute w-full top-0 left-0 m-10 text-3xl font-serif text-white z-20 select-none">
                    <h1>Newest in <span className='font-bold underline'>{title}</span></h1>
                    <Link href={link}><h1 className='cursor-pointer underline underline-offset-4 text-2xl mt-2'>See more</h1></Link>
                </div>
                <div className="left-0 top-0 absolute z-10 bg-gradient-to-r from-black via-black/50 to-black/0 h-full w-full"></div>
                <img className='w-full ' src="https://preview.redd.it/bqw893oulef91.jpg?width=640&crop=smart&auto=webp&s=4a157c4fbb9140fa28b0cee4f51be13299f4fe18" alt="" />
            </div>
            <div className="w-96 shrink-0 bg-gray-200"></div>
            <div className="w-96 shrink-0 bg-gray-200"></div>
            <div className="w-96 shrink-0 bg-gray-200"></div>
        </div>
    </div>
  )
}

export default Section