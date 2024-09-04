import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between px-6 py-4 items-center'>
        <img src="/public/logo-entreprise.png" alt="" />
        <img src="/public/menu.png" alt="" className='w-6 h-3'/>
    </div>
  )
}

export default Navbar
