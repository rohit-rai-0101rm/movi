import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const base_Url=process.env.REACT_APP_MOVIE_API_URL
export const moviApi=createApi({
    reducerPath:'moviApi',
    baseQuery:fetchBaseQuery({
        baseUrl:base_Url
    }),
    endpoints:(builder)=>({
        getMoviData:builder.query({
            query:()=>({
                url:`?apiKey=${process.env.REACT_APP_API_KEY}&s=${process.env.REACT_APP_MOVI_TEXT}&type=movie`,
                params: { r: 'json'},
                method:'GET'
            })
        })
        
    })
})
export const{useGetMoviDataQuery}=moviApi