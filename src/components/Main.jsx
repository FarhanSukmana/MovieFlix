import React, { useEffect, useState } from 'react'
import requests from '../request'
import axios from 'axios'

const Main = () => {
    
    const [films, setFilm]=useState([])
    const film= films[Math.floor(Math.random() * films.length)]
    
    useEffect(() => {
        axios.get(requests.requestPopular).then((response) => {
            setFilm(response.data.results)
        })
    },[])

    const panjangdescr = (str, num)=>{
        if(str?.length > num){
            return str.slice(0, num)+'....';
        }else{
            return str;
        }
    }

    
    return (
   <div className='w-full h-[600px] text-white'>
        <div className='w-full h-full'>
            <div className='absolute w-full h-[600px] bg-gradient-to-r from-black'></div>
             <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/original/${film?.backdrop_path}`} alt={film?.title} />
            <div className='absolute w-full top-[25%] p-4 md:p-8'>
                <h1 className='text-3xl md:text-5xl font-bold'>{film?.title}</h1>
                <div className='my-4'>
                    <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Mulai</button>
                    <button className='border ml-4 text-white border-gray-300 py-2 px-5'>Simpan</button>
                </div>
                <p className='text-gray-400 text-sm'>Released: {film?.release_date}</p>
                <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{panjangdescr(film?.overview,170)} </p>
            </div>
        </div>
   </div>  
  )
}
export default Main