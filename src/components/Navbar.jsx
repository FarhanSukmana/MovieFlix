import React from 'react'

const Navbar = () => {
  return (
    <div className='flex p-4 items-center justify-between z-[50] w-full absolute'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>MovieFlix</h1>
        <div>
            <button className='text-white pr-4'>Daftar</button>
            <button className='bg-red-600 text-white px-6 py-2 rounded cursor-pointer'>Masuk</button>
        </div>
    </div>
  )
}

export default Navbar