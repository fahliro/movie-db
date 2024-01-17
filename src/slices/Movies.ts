import { createSlice } from "@reduxjs/toolkit"
import { MOVIES } from "../constants"
import { IInitialState, IMovie } from "../interfaces/Movies"

const initialMovie: IMovie = {
    id: "",
    backdrop_path: "",
    overview: "", 
    poster_path: "", 
    release_date: "",
    title: ""
}

const initialState: IInitialState = {
    movies: [],
    movie: initialMovie

}

const moviesSlice = createSlice({
    name: MOVIES,
    initialState,
    reducers: {
        addMovies: (state, action): void => {
            const { payload } = action
            const { movies } = payload

            state.movies = movies  
        },
        addMovie: (state, action): void => {
            const { payload } = action
            const { movie } = payload
    
            state.movie = movie  
        }
    }
})

export const { addMovies, addMovie } = moviesSlice.actions
export default moviesSlice.reducer