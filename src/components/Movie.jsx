import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requests from '../request'
import Films from './Films'

const  Movie = () => {
    const [film, setFilm]= useState([])
    const [FetchURL, setFetchURL]=  useState(requests.requestToprated)

    const [Category, setCategory]= useState('requestToprated')
    
    const ButtonMenu=(ctgr, fetch)=>{
        setCategory(ctgr);
        setFetchURL(fetch);
    }
    
    useEffect(() => {
        axios.get(FetchURL).then((response) =>{
            setFilm(response.data.results);
        })
    },[FetchURL])

    console.log(Movie)

  return (
    <div>
        <div className='text-white p-4 font-bold flex gap-x-4 text-sm md:text-xl'>
        <button className={`${Category === "requestToprated" ? "text-red-600 underline-offset-8 underline" : ""} 
        hover:text-red-600 hover:underline underline-offset-8 transition duration-300`} onClick={() => ButtonMenu("requestToprated",(requests.requestToprated))}>Top Rated </button> 
        <button className={`${Category === "requestNowplaying" ? "text-red-600 underline-offset-8 underline" : ""} 
        hover:text-red-600 hover:underline underline-offset-8 transition duration-300`} onClick={() => ButtonMenu("requestNowplaying",(requests.requestNowplaying))}>Now Playing </button> 
        <button className={`${Category === "requestPopular" ? "text-red-600 underline-offset-8 underline" : ""} 
        hover:text-red-600 hover:underline underline-offset-8 transition duration-300`} onClick={() => ButtonMenu("requestPopular",(requests.requestPopular))}>Popular </button> 
        <button className={`${Category === "requestUpcoming" ? "text-red-600 underline-offset-8 underline" : ""} 
        hover:text-red-600 hover:underline underline-offset-8 transition duration-300`} onClick={() => ButtonMenu("requestUpcoming",(requests.requestUpcoming))}>Upcoming </button> 
        </div>
        <div className='text-white'>
            {film.map((item,index) =>(
                <Films key={index} item={item} />
            ))}
        </div>
    </div>
  )
}


export default Movie
