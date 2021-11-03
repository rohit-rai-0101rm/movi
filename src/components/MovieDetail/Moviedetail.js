import React,{useEffect} from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { getSelectedMovieOrShow } from '../../features/movies/moviSlice'
import { useGetMovieorShowsbyIdQuery } from '../../Service/MovieApi'
const Moviedetail = () => {
    const {imdbId}=useParams()
    const  dispatch = useDispatch()
    //const data=useSelector(getSelectedMovieOrShow)
    const response=useGetMovieorShowsbyIdQuery(imdbId)
    if(response.isFetching) return `Loading...`
    console.log(response)

   /* useEffect(() => {
        dispatch(response)
    }, [dispatch,imdbId])*/
    return (
        <div>
            MovieDetail
        </div>
    )
}

export default Moviedetail
