import React from 'react'
import Link from 'next/link'

function CategoryButton({title, link, img}) {
  return (
    <Link href={'/'+link}>
        <div className="w-80 h-80 shrink-0 flex justify-center items-center text-white font-serif text-3xl bg-center bg-blend-darken bg-cover grayscale-[50%] contrast-125" style={{backgroundImage: `url("${img}")`}}>
            <h1>{title}</h1>
        </div>
    </Link>
  )
}

export default CategoryButton