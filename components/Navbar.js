import React from 'react'
import NavLink from './NavLink'
import Link from 'next/link'

function Navbar() {
  return (
    <>
    <div className="w-full bg-black text-center text-white font-serif tracking-widest">
      <h1 className='py-1'>Currently in BETA</h1>
    </div>
    <div className='w-full h-32 border-b-1 border flex justify-center items-center overflow-hidden relative group'>
        <div className="h-full w-[1200px] font-semibold uppercase font-serif flex items-center justify-center px-10">
            <Link href={'/'}>
              <h1 className='text-4xl cursor-pointer z-10 select-none'>obsessive</h1>
            </Link>
            <img draggable={false} className='w-full absolute opacity-0 group-hover:opacity-100 duration-500' src="https://images.unsplash.com/photo-1558486012-817176f84c6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=670&q=80" alt="" />
        </div>
    </div>
    <div className="w-full h-16 sticky flex top-0 justify-center space-x-5 items-center uppercase bg-white z-50 select-none">
      <Link href={'/setups'}>
        <h1 className='cursor-pointer'>SETUPS</h1>
      </Link>
      <Link href={'/audio'}>
        <h1 className='cursor-pointer'>Audio</h1>
      </Link>
      <Link href={'/coffee'}>
        <h1 className='cursor-pointer'>Coffee</h1>
      </Link>
      <Link href={'/cars'}>
        <h1 className='cursor-pointer'>Cars</h1>
      </Link>
      <Link href={'/edc'}>
        <h1 className='cursor-pointer'>EDC</h1>
      </Link>
    </div>
    </>
  )
}

export default Navbar