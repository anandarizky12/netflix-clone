import React,{useState,useEffect} from 'react'
import './HomeScreen.css'
import Nav from './Nav';
import Banner from './Banner';
import Row from './Row';
import ProfileScreen from './HomeScreen';
import Search from './Search';


 function HomeScreen() {

    const API_key ='db29f7767df47e8dbbba2d9656633e03';
    const [searchon,setsearchon]=useState(false);
    const [movies,setmovies]=useState([]);
    useEffect(() => {
       setmovies([])
    }, [searchon]);

    
    return (
    
     
        <div className={`homescreen ${searchon && 'hidden'}`}> 
            <Nav setsearchon={setsearchon} searchon={searchon} movies={movies} setmovies={setmovies} />
              <Search movies={movies} searchon={searchon} />
             
               <Banner/>
            
               <div className="rowcontainer">
               <Row
                    Title='Netflix Original'
                    fetchURL={`https://api.themoviedb.org/3/discover/tv?api_key=db29f7767df47e8dbbba2d9656633e03&with_network=213`}
                    isLargerow
                   />
                         <Row
                    Title='Top Rated'
                    fetchURL={`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_key}&language=en-US`}
                    isLargerow
                   />
                     <Row
                    Title='Trending Now'
                    fetchURL={`https://api.themoviedb.org/3/trending/all/week?api_key=${API_key}&language=en-US`}
                    isLargerow
                   />
                     <Row
                    Title='Actions'
                    fetchURL={`https://api.themoviedb.org/3/discover/movie?api_key=${API_key}&with_genres=28`}
                    isLargerow
                   />
                     <Row
                    Title='Comedy'
                    fetchURL={`https://api.themoviedb.org/3/discover/movie?api_key=${API_key}&with_genres=35`}
                    isLargerow
                   />
                     <Row
                    Title='Horror'
                    fetchURL={`https://api.themoviedb.org/3/discover/movie?api_key=${API_key}&with_genres=27`}
                    isLargerow
                   />
                     <Row
                    Title='Romance'
                    fetchURL={`https://api.themoviedb.org/3/discover/movie?api_key=${API_key}&with_genres=10749`}
                    isLargerow
                   />
                     <Row
                    Title='Documentaries'
                    fetchURL={`https://api.themoviedb.org/3/discover/movie?api_key=${API_key}&with_genres=99`}
                    isLargerow
                   />
                   </div>
                 
           
           
          

          
          
          
            {/*banner*/}
      
  
        </div>
  
    )
}
export default HomeScreen;