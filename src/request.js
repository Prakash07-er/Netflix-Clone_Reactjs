const Api_key = "bfbc7675d41a5f90ff9889d04d8f97f1" 

const requests ={
    fetchTrending : `/trending/all/week?api_key=${Api_key}&language=en-us`,
    fetchNetflixOriginals : `/discover/tv/?api_key=${Api_key}&with_network=213`,
    fetchTopRated : `/movie/top_rated?api_key=${Api_key}&language=en-us`,
    fetchActionMovies: `/discover/movie?api_key=${Api_key}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${Api_key}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${Api_key}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${Api_key}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${Api_key}&with_genres=99`
}
export default requests;