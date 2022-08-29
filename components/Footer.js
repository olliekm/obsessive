import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <div className="w-full min-h-96 max-h-auto bg-black flex justify-center text-white">
    <div className=" lg:w-1/2 w-3/4 sm:p-10 p-5 flex sm:flex-row flex-col justify-center font-serif">
      <div className="w-1/2  flex flex-col">
        <Link href={'/'}>
          <h1 className='text-4xl cursor-pointer z-10 select-none font-serif uppercase'>obsessive</h1>
        </Link>
        <p>The one stop for all hobbiests.</p>
      </div>
      <div className="w-1/2 flex flex-col text-3xl space-y-2">
        <h1>Sections:</h1>
        <Link href={'/setups'}>
          <h1 className='text-2xl cursor-pointer z-10 select-none font-serif hover:underline underline-white'>1. Setups</h1>
        </Link>
        <Link href={'/audio'}>
          <h1 className='text-2xl cursor-pointer z-10 select-none font-serif hover:underline underline-white'>2. Audio</h1>
        </Link>
        <Link href={'/coffee'}>
          <h1 className='text-2xl cursor-pointer z-10 select-none font-serif hover:underline underline-white'>3. Coffee</h1>
        </Link>
        <Link href={'/cars'}>
          <h1 className='text-2xl cursor-pointer z-10 select-none font-serif hover:underline underline-white'>4. Cars</h1>
        </Link>
        <Link href={'/edc'}>
          <h1 className='text-2xl cursor-pointer z-10 select-none font-serif hover:underline underline-white'>5. EDC</h1>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Footer