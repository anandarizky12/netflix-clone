import React,{useState,useEffect} from 'react'
import './Banner.css'
import axios from './Axios'; 
import requests from './Request'; 



function Banner() {
    

    const [movie,setmovies]=useState([]);
    useEffect((e)=>{

            async function fetchData(){
                const request = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=db29f7767df47e8dbbba2d9656633e03&language=en-US`);
                const requestData=await request.json();
                setmovies(
                (requestData.results) && 
                    requestData.results[
                        Math.floor(Math.random()* requestData.results.length-1)
                    ]
                
                    );
                    
                    return request;
                
            }
            fetchData();
    },[])
    console.log(movie);



    function truncate(string,n){
        return string?.length > n ? string.slice(0, n-1)+(" . . . ") : string;
    }
    return (
        <header className='banner' style={{
            backgroundSize:'cover',
            backgroundImage:`linear-gradient(90deg,rgba(10, 5, 5, 0.514),rgba(255, 255, 255, 0.007)),url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path || movie?.poster_path}")`,
            backgroundPosition:'top center',
      
            }}>
            
            <div className="banner_contents">
                <h1 className="banner_title">
                   {movie?.name||movie?.original_name||movie?.title}
                </h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <p className="banner_descriptions">
                 
                    {truncate(movie?.overview,250)}
                </p>
            </div>
            <div className="banner_fadebottom"/>
        </header>
    )
}

export default Banner
