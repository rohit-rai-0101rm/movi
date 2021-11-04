import { createSlice } from "@reduxjs/toolkit";
const initialState={
    movies:{},
    shows:{},
    selectedMoviOrShow:{}
}
const moviSlice=createSlice({
    name:"movies",
    initialState,
    reducers:{
        addMovies:(state,{payload})=>{
            state.movies=payload;
        },
        addShows:(state,{payload})=>{
            state.shows=payload;
        },
        addSelectedMoviorShow:(state,{payload})=>{
            state.selectedMoviOrShow=payload
        }

    }
})

export const {addMovies}=moviSlice.actions;
export const {addShows}=moviSlice.actions;
export const {addSelectedMoviorShow}= moviSlice.actions;



export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;

export default moviSlice.reducer