import React,{useState,useEffect,useRef} from 'react'
import './Row.css';
import { FaArrowAltCircleRight,FaArrowAltCircleLeft } from 'react-icons/fa';
import Details from './Details.js';

function Row({ Title,fetchURL,isLargerow=false}) {
     
    const [id,setid]=useState([]);

    const base_url='https://image.tmdb.org/t/p/original';

    const [movies,setmovies]=useState([]);
    const [details,setdetails]=useState(false);
    async function fetchData(){
        const request =await fetch(fetchURL);
        const requestData=await request.json();
        setmovies(requestData.results);
        return requestData;;
    }

    useEffect(() => {
        fetchData()
    }, [fetchURL]);
    ////////////////////////////////////////////////////////for scrolllll
   const getel=document.querySelectorAll('.row_posters');

//////left
    const left=document.querySelectorAll('.left')
    left.forEach((el)=>{
       
        el.addEventListener('click',()=>{
           let left=  el.parentElement.scrollLeft -= 700;
             console.log( el.parentElement.scrollLeft);
             return left;
        })
    })
///////right 
const right=document.querySelectorAll('.right')
right.forEach((el)=>{
   
    el.addEventListener('click',()=>{
        let right= el.parentElement.scrollLeft += 700;
         console.log( el.parentElement.scrollLeft);
         return right;
    })
})
////////
    function trunk(string,n){
        return string.length > n ? string.slice(0,n-1)+(" . . . ") : string;
    }
    console.log(movies.length,"movie");
    
    return (
        <div className='row'> 
            <h2>{Title}</h2>
        <div className="container">
            <div  className="row_posters"  >
            <FaArrowAltCircleLeft className={`left`}/>
                {movies.slice(0,10).map(movie=>(
                    ((isLargerow && movie.poster_path)||(!isLargerow && movie.backdrop_path)) &&(
                   <div className="imgtitle">
                            <img  onClick={(e)=>(setid(movie) ,setdetails(true),console.log(movie.id,details))} className={`row_poster ${isLargerow && 'row_posterlarge'}`}  key={movie.id} 
                             src={`${base_url}${isLargerow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
                           
                            <p className="title">{trunk(movie.name||movie.title,15)}</p>
                   </div>
                    
                        ) 
                        
                ))}
                
                <FaArrowAltCircleRight className={`right `}/>
               
            </div>
           {details==true && <Details movie={id} details={details} setdetails={setdetails} /> }
        
        </div>
           
         
        </div>
    )
}
export default Row
