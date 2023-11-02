import React, { useState } from 'react'
import {FaHeart, FaRegHeart} from 'react-icons/fa'


const Films = ({item}) => {
    const [likes, setLikes]=useState(false)

  return (
    <div className='ml-8  mt-8 w-[220px] sm:[260px] md:[320px] lg:[360px] h-auto inline-block curson-pointer relative p-2'>
        <img className='h-[150px] w-full block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
        <div className='flex flex-col '>
          <h1 className='text-white text-lg font-bold md:text-base'>{item?.title}</h1>
          <p className='text-gray-400 text-sm'>{item?.release_date}</p>
        </div>
        <div className='absolute top-0 left-0 h-[200px] w-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
            <p className='white-space-normal text-xs md:text-sm font-bold flex text-center items-center justify-center h-full'>{item?.title}</p>
            <p className='absolute text-gray-200 pt-4 pl-4 top-0 left-0'>{likes? <FaHeart size={20}/> : <FaRegHeart size={20} />}</p>
        </div>
     </div>
  )
}

export default Films