import { createSlice } from "@reduxjs/toolkit";
const initialState={
    movies:[]
}
const moviSlice=createSlice({
    name:"movies",
    initialState,
    reducers:{
        addMovies:(state,{payload})=>{
            state.movies=payload;
        },

    }
})
export const {addMovies}=moviSlice.actions;
export const getAllMovies = (state) => state.movies.movies;

export default moviSlice.reducer