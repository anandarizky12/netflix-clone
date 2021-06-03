import React,{useState,useEffect} from 'react'
import './Search.css';


function Search({searchon,movies}) {
  
 
 
    return (
        <div className={`searchon ${searchon==true ? "_active" :  ""}`}>
            <div className="resultssearch">
               {(movies && movies.map((movie)=>(
                      
                movie.poster_path &&      
                <div className="item-search">  
                    <div className="moviessearch">{movie.title||movie.name}</div>
                    <img src={`https://image.tmdb.org/t/p/w1280`+movie.poster_path} alt=""/>  
                </div>    
               
        
               )))}
            </div>
        </div>
    )
}

export default Search
