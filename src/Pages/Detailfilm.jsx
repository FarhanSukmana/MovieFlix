import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
  const {id} = useParams()
  const [itemDetails, setItemDetails] = useState(null)

  useEffect(() =>{
    const fetchData= async()=>{
    try{
      const response= await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f0df707a94ade303a413114244cb3023&language=en-US
      `)
      const data= await response.json()
      setItemDetails(data)
    }catch(error){
      console.log(error)
    }
    }
    fetchData()

  },[id])
  console.log(itemDetails)
  return (
    <div className='h-screen max-w-full'>
      {/* Background */}
      <div className='w-full h-[80%] '>
        <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/original/${itemDetails?.backdrop_path}`} alt={itemDetails?.title} />
        <div className='w-full h-[83%]  absolute top-0 bg-gradient-to-l from-black'></div>
      </div>
      
      <div className='md:top-80 md:left-6 absolute left-20 top-80'>
        <div className='w-[220px] h-[280px]'>
          <img className='rounded-lg shadow-lg shadow-red-600' 
          src={`https://image.tmdb.org/t/p/original/${itemDetails?.poster_path}`} alt={itemDetails?.title} />
        </div>
      </div>

      <div className='w-fit md:ml-60 text-gray-300 p-6 pt-[140px] md:pt-6 '>
        <h1 className='text-2xl font-bold'>{itemDetails?.title}</h1>
        <h1 className='text-lg text-gray-400'>"{itemDetails?.tagline}"</h1>

      <div className='flex md:flex-row flex-col'>
        <div className='mr-20'>
        <h1 className='text-lg font-bold pt-2'>Genre :</h1>
        <h2 className='text-gray-400'> {itemDetails?.genres.map((genre)=>genre.name).join(', ')}</h2>
        </div>

        <div>
        <h1 className='text-lg font-bold pt-2'>Released Date :</h1>
        <h2 className='text-gray-400'>{itemDetails?.release_date}</h2>
        </div>
      </div>

      <div className='w-[90%] '>
      <h1 className='text-lg font-bold pt-2 '>Overview :</h1>
      <h2 className='text-gray-400 text-justify'>{itemDetails?.overview}</h2>
      </div>

      </div>
    </div>
  )
}

export default Detail