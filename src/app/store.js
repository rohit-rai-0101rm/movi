import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { moviApi } from '../Service/MovieApi';
import moviReducer from '../features/movies/moviSlice'
export const store = configureStore({
  reducer: {
    [moviApi.reducerPath]:moviApi.reducer, 
    moviReducer
  },
});
