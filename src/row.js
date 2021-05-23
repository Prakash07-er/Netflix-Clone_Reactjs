import React, { useEffect, useState } from 'react'
import axios from  "./axios"
import './styles/row.css'
import movieTrailer from 'movie-trailer'
import YouTube from 'react-youtube'

const base_url = "https://image.tmdb.org/t/p/original/"

export default function Row({title,fetchUrl,islargeRow}) {
    const [movies, setMovies]  =useState([])
    const [trailerUrl, setTrailerUrl] = useState("")

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request
        }
        fetchData();
    },[fetchUrl])
    // console.log(movies)

    const opts ={
        height: "390",
        width : "100%",
        playervars : {
            // https://developers.google.com/youtube/player-parameters
            autoplay :1,
        },
    }
    const handleClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl('')
        }else{
            movieTrailer(movie?.name || "")
            .then((url) => {
                const urlParams = new URLSearchParams( new URL(url).search);
                setTrailerUrl(urlParams.get('v'))
            })
            .catch ((error) => console.log("Unprocessed Entity : 422 Error"))
        }
    }

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {
                    movies.map(movie => (
                        <img  className={`row_poster ${islargeRow && "row_posterLarge"}`}
                        onClick={() => handleClick(movie)}
                        id="width"
                        key={movie.id}
                        src={`${base_url}${islargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name} ></img>
                    ))
                }
              
            </div>
             { trailerUrl &&  <YouTube videoId={trailerUrl} opts={opts} /> }
        </div>
    )
}
