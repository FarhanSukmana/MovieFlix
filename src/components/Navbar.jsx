import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../Acc/AuthContext'

const Navbar = () => {
  const navigate = useNavigate()

  const {user, logout}=UserAuth()

  const btnLogout = async() =>{
    try{
      await logout()
      navigate('/')

    }catch(error){
      alert(error)
    }
  }

  return (
    <div className='flex p-4 items-center justify-between z-[50] w-full absolute'>
        <Link to='/'>
          <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>
            MovieFlix
            </h1>
        </Link>

       {user?.email ?(
          <div>
          <Link to='/account'>
            <button className='text-white pr-4'>Account</button>
          </Link>
            <button onClick={btnLogout} className='bg-red-600 text-white px-6 py-2 rounded cursor-pointer'>LogOut</button>
            </div>
          ) : (
          <div>
          <Link to='/signup'>
            <button className='text-white pr-4'>Daftar</button>
          </Link>
          <Link to='/login'>
            <button className='bg-red-600 text-white px-6 py-2 rounded cursor-pointer'>Masuk</button>

          </Link>
           </div>
       )}
    </div>
  )
}

export default Navbar