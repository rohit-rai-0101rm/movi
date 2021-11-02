import React from 'react'
import { Link } from "react-router-dom";
import user from "../../images/user.png";
import "./home.scss";
import MovieListing from "../Movielisting/Movielisting";
import { useGetMoviDataQuery } from '../../Service/MovieApi';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/moviSlice';
const Home = () => {
  const dispatch=useDispatch()
    const response=useGetMoviDataQuery()
    console.log(response)
    dispatch(addMovies(response.data))
    return (

        <div>
      <div className="banner-img">
      </div>
      <MovieListing />
    </div>
    )
}

export default Home
