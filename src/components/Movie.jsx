import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requests from '../request'
import Films from './Films'

const  Movie = () => {
    const [film, setFilm]= useState([])
    const [FetchURL, setFetchURL]=  useState(requests.requestPopular)

    const [Category, setCategory]= useState('requestPopular')
    
    // SEARCH
    function formated(e){
        return e.replace(/ /g, '%20')
    }

    const ButtonMenu=(ctgr, fetch)=>{
        setCategory(ctgr);
        setFetchURL(fetch);
    }
    useEffect(() => {
        axios.get(FetchURL).then((response) =>{
            setFilm(response.data.results);
        })
    },[FetchURL])

  return (
    <div>
        <div className='text-white p-4 font-bold md:flex-row flex-col  flex gap-x-4 text-sm md:text-xl items-center justify-between'>
            <div className='gap-4 flex'>
                <button className={`${Category === "requestPopular" ? "text-red-600 underline-offset-8 underline" : ""} 
                hover:text-red-600 hover:underline underline-offset-8 transition duration-300`} onClick={() => ButtonMenu("requestPopular",(requests.requestPopular))}>Popular </button> 
                <button className={`${Category === "requestToprated" ? "text-red-600 underline-offset-8 underline" : ""} 
                hover:text-red-600 hover:underline underline-offset-8 transition duration-300`} onClick={() => ButtonMenu("requestToprated",(requests.requestToprated))}>Top Rated </button> 
                <button className={`${Category === "requestNowplaying" ? "text-red-600 underline-offset-8 underline" : ""} 
                hover:text-red-600 hover:underline underline-offset-8 transition duration-300`} onClick={() => ButtonMenu("requestNowplaying",(requests.requestNowplaying))}>Now Playing </button> 
                <button className={`${Category === "requestUpcoming" ? "text-red-600 underline-offset-8 underline" : ""} 
                hover:text-red-600 hover:underline underline-offset-8 transition duration-300`} onClick={() => ButtonMenu("requestUpcoming",(requests.requestUpcoming))}>Upcoming </button> 
            </div>
            <div className='mr-4 md:mt-0  mt-4'>
                 <input onKeyDown={(e=>{
                    if(e.key === "Enter"){
                        e.preventDefault();
                        console.log("Searh")
                        const format=formated(e.target.value)
                        console.log(format)
                        setCategory('')
                        setFetchURL(`https://api.themoviedb.org/3/search/movie?query=${format}&api_key=f0df707a94ade303a413114244cb3023&language=en-US&page=1`)
                    }
                 })}
                 placeholder='Search...'
                 type="text" className='rounded-lg bg-gray-800 text-sm p-2 text-gray-300'/>
            </div>
        </div>

        <div className='mx-4 mb-12 gap-4 grid items-center justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-5'>
            {film.map((item, index) => (
                <div key={index} className="mx-auto mt-6">
                    <Films item={item} />
                </div>
            ))}
            </div>
    </div>
  )
}


export default Movie
