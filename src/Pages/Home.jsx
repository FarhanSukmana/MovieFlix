import React from 'react'
import Main from '../components/Main'
import requests from '../request'
import Row from '../components/row'

const Home = () => {
  return (
    <div className=''>
        <Main />
        <Row id='1' title='Up Coming' fetchURL={requests.requestUpcoming} />
        <Row id='2' title='Now Playing' fetchURL={requests.requestNowplaying} />
        <Row id='3' title='Popular' fetchURL={requests.requestPopular} />
        <Row id='4' title='Top Rated' fetchURL={requests.requestToprated} />
\    </div>
  )
}

export default Home