const API_key ='db29f7767df47e8dbbba2d9656633e03';



const requestsdata={
    fetchTrending:`/trending/all/week?api_key=${API_key}&language=en-US`,
    fetchNetflixOriginal:`/discover/tv?api_key=${API_key}&with_network=213`,
    fetchNetflixAction:`/discover/movie?api_key=${API_key}&with_genres=28`,
    fetchNetflixTop:`/movie/top_rated?api_key=${API_key}&language=en-US`,
    fetchNetflixComedy:`/discover/movie?api_key=${API_key}&with_genres=35`,
    fetchNetflixHoror:`/discover/movie?api_key=${API_key}&with_genres=27`,
    fetchNetflixRomance:`/discover/movie?api_key=${API_key}&with_genres=10749`,
    fetchNetflixDocumentaries:`/discover/movie?api_key=${API_key}&with_genres=99`,
    

}


export default requestsdata;