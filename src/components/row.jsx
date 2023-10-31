import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Films from './Films';
import * as Icon from 'react-feather';


const Row = ({title, fetchURL, id}) => {
    const [films, setFilm]=useState([]);

    useEffect(() =>{
        axios.get(fetchURL).then((response) => {
            setFilm(response.data.results)
        })
    },[fetchURL])

    const scrollLeft=()=>{
        var slider = document.getElementById('slider' + id );
        slider.scrollLeft = slider.scrollLeft - 400;
    };
    const scrollRight=() =>{
        var slider = document.getElementById('slider' + id);
        slider.scrollLeft = slider.scrollLeft + 500;
    };

  return (
    <>
    <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
    <div className='relative flex items-center group'>
        <Icon.ChevronLeft onClick={scrollLeft} size={30} color='black' className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block left-0' />
        <div id={'slider' + id } className='w-auto h-full overflow-x-auto scroll-smooth whitespace-nowrap scrollbar-hide relative'>
            {films.map((item,index) =>(
                <Films key={index} item={item} />
            ))}
        </div>
        <Icon.ChevronRight onClick={scrollRight} size={30} color='black' className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block right-0' />
    </div>
    </>
  )
}

export default Row