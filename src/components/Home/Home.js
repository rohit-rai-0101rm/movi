import React from 'react'
import { Link } from "react-router-dom";
import user from "../../images/user.png";
import "./home.scss";
import MovieListing from "../Movielisting/Movielisting";
import { useGetMoviDataQuery,useGetShowsDataQuery } from '../../Service/MovieApi';
import { useDispatch } from 'react-redux';
import { addMovies,addShows } from '../../features/movies/moviSlice';
const Home = () => {
  const dispatch=useDispatch()
  const{data,isFetching}=useGetMoviDataQuery()
  const showResponse=useGetShowsDataQuery()
  if(showResponse.isFetching) return `Loading`
    if(isFetching) return `loading...`
    console.log(showResponse)
    console.log(data.Search)
    dispatch(addMovies(data))
    dispatch(addShows(showResponse.data))
    return (

        <div>
      <div className="banner-img">
      </div>
      <MovieListing />
    </div>
    )
}

export default Home
