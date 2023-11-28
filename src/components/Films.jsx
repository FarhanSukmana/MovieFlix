import React from 'react'
import { Link } from 'react-router-dom'


const Films = ({item}) => {


  return (
    <Link  to={`/detail/${item.id}`} >
    <div className='w-[220px] h-[280px] relative hover:shadow-lg hover:shadow-red-600 hover:scale-110 transition duration-200 cursor-pointer' >
        <img className='object-cover h-full w-full rounded-lg ' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
        <div className='absolute top-0 h-[280px] w-[220px] bg-black/80 opacity-0 hover:opacity-100 rounded-lg'>
            <p className='text-white text-xs md:text-sm font-bold flex text-center items-center justify-center h-full'>{item?.title}</p>
        </div>
     </div>
     </Link>
  )
}

export default Films