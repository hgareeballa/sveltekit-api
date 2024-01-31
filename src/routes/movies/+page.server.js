import { env } from '$env/dynamic/private';

export const load = async () =>{  
    console.log('KEY:',env.API_KEY); 
    return {
        movies: fetchMovies()
    }
}//

const fetchMovies = async () =>{
    const res = await fetch('https://api.themoviedb.org/3/movie/550?api_key=f9c48317a40fd385032e1360a3aa5491')
    const data = await res.json()       
    return data
}//


