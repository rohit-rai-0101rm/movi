import React,{useEffect} from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { addSelectedMoviorShow,getSelectedMovieOrShow } from '../../features/movies/moviSlice'
import { useGetMovieorShowsbyIdQuery } from '../../Service/MovieApi'
import './moviedetail.scss'
const Moviedetail = () => {
    const {imdbID}=useParams()
    const  dispatch = useDispatch()
    const data=useSelector(addSelectedMoviorShow)

    const response=useGetMovieorShowsbyIdQuery(imdbID)
    if(response.isFetching) return `Loading...`
    console.log(response.data)

   dispatch(addSelectedMoviorShow(response.data))
   console.log(data)
   return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <div className="section-left">
            <div className="movie-title">{response.data.Title}</div>
            <div className="movie-rating">
              <span>
                IMDB Rating <i className="fa fa-star"></i> : {response.data.imdbRating}
              </span>
              <span>
                IMDB Votes <i className="fa fa-thumbs-up"></i> :{" "}
                {response.data.imdbVotes}
              </span>
              <span>
                Runtime <i className="fa fa-film"></i> : {response.data.Runtime}
              </span>
              <span>
                Year <i className="fa fa-calendar"></i> : {response.data.Year}
              </span>
            </div>
            <div className="movie-plot">{response.data.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{response.data.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{response.data.Actors}</span>
              </div>
              <div>
                <span>Generes</span>
                <span>{response.data.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{response.data.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{response.data.Awards}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={response.data.Poster} alt={response.data.Title} />
          </div>
        </>
      )}
    </div>
  );
};


export default Moviedetail
