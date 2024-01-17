import { createSlice } from "@reduxjs/toolkit"
import { MOVIES } from "../constants"
import { IInitialState, IMovie, IReview } from "../interfaces/Movies"

const initialMovie: IMovie = {
    id: 0,
    backdrop_path: "",
    overview: "", 
    poster_path: "", 
    release_date: "",
    title: ""
}

const initialState: IInitialState = {
    movies: [],
    movie: initialMovie,
    watched: [],
    reviews: []
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
        },
        addWatched: (state, action): void => {
            const { payload } = action
            const { watched } = payload
    
            state.watched.push(watched)

        },
        removeWatched: (state, action): void => {
            const { payload } = action
            const { watched } = payload
            
            const items = state.watched.filter((item: number) => item !== watched)
            
            state.watched = items
        },
        addReview: (state, action): void => {
            const { payload } = action
            const { review, id, idReview, date } = payload
    
            state.reviews.push({review, id, date, idReview})
            
        },
        removeReview: (state, action): void => {
            const { payload } = action
            const { idReview } = payload

            const items = state.reviews.filter((item: IReview) => item.idReview !== idReview)
    
            state.reviews = items
        }
    }
})

export const { addMovies, addMovie, addWatched, removeWatched, addReview, removeReview } = moviesSlice.actions
export default moviesSlice.reducer