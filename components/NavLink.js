import React from 'react'

function NavLink() {
  return (
    <div className='group cursor-pointer h-16 flex items-center'>
        <h1>Setups</h1>
        <div className="absolute w-full h-96 bg-black left-0 top-0 mt-16 group-hover:block hidden"></div>
    </div>
  )
}

export default NavLink