const key = 'f0df707a94ade303a413114244cb3023'

const requests={
    requestPopular : `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestToprated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestNowplaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=2`,
    requestUpcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`
}

export default requests