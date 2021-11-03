import React from 'react'
import { useSelector } from 'react-redux'
import "./movielisting.scss";
import MovieCard from '../MovieCard/MovieCard'
import { getAllMovies,getAllShows } from '../../features/movies/moviSlice'

const Movielisting = () => {
    const movies=useSelector(getAllMovies)
    const shows=useSelector(getAllShows)
    console.log(movies.Search)
    console.log(shows)


    return (
        <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
            {
                movies.Search.map((movi,i)=>(
                    <MovieCard key={i} data={movi}
                
                    
                    />
                ))
            }
            
        </div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">
            {
                shows.Search.map((movi,i)=>(
                    <MovieCard key={i} data={movi}
                
                    
                    />
                ))
            }
            
        </div>
      </div>
      </div>
    )
}

export default Movielisting
