import React from 'react'
import { useSelector } from 'react-redux'
import "./movielisting.scss";

import MovieCard from '../MovieCard/MovieCard'
import { getAllMovies } from '../../features/movies/moviSlice'
const Movielisting = () => {
    const movies=useSelector(getAllMovies)
    console.log(movies.Search)
    


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
      </div>
    )
}

export default Movielisting
