import React, { useState } from 'react'
import {FaHeart, FaRegHeart} from 'react-icons/fa'


const Films = ({item}) => {
    const [likes, setLikes]=useState(false)

  return (
    <div className='w-[200px] sm:[240px] md:[280px] lg:[320px] inline-block curson-pointer relative p-2'>
        <img className='h-auto w-full block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
        <div className='absolute top-0 left-0 h-full w-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
            <p className='white-space-normal text-xs md:text-sm font-bold flex text-center items-center justify-center h-full'>{item?.title}</p>
            <p className='absolute text-gray-200 p-2 top-0 left-0'>{likes? <FaHeart/> : <FaRegHeart />}</p>
        </div>
     </div>
  )
}

export default Films