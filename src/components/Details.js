import React,{useState} from 'react'
import './Details.css';
import { AiFillCloseCircle,FaWindowClose } from 'react-icons/fa';
function Details({movie,details,setdetails}) {
    const base_url='https://image.tmdb.org/t/p/original';
  
    return  (
        
        <div className="details" style={{  
            backgroundImage:`linear-gradient(90deg,rgb(10, 5, 5),rgba(10, 66, 80, 0.568)),url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundSize:'cover',
            backgroundPosition:'top center',
            }}>
            <div className="contentdetails">
                    <h3  className="titledetails">{movie.title||movie.name}</h3>
                    <p className="p">{movie.overview}</p>
                    <p className={`p${movie.vote_average<7 ? ' red' : ' green'}`} > Rating {movie.vote_average}</p>
            </div>
          
            <img className="imgdetails" src={`${base_url}${movie.backdrop_path}`} alt=""/>
            <FaWindowClose onClick={() =>setdetails(false)} className="FaClose"/>
        </div>
    )
}

export default Details
