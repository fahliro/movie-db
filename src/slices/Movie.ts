import { createSlice } from "@reduxjs/toolkit"
import { MOVIES } from "../constants"
import { IInitialState, IMovie, IRate, IReview } from "../interfaces/Movie"

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
    reviews: [],
    rates: []
}

const moviesSlice = createSlice({
    name: MOVIES,
    initialState,
    reducers: {
        addMovies: (state: IInitialState, action): void => {
            const { payload } = action
            const movies: IMovie[] = payload

            state.movies = movies  
        },
        addMovie: (state: IInitialState, action): void => {
            const { payload } = action
            const movie: IMovie = payload
    
            state.movie = movie  
        },
        removeMovie: (state: IInitialState): void => {
            state.movie = initialMovie
        },
        addWatched: (state: IInitialState, action): void => {
            const { payload } = action
            const watched: number = payload
    
            state.watched.push(watched)
        },
        removeWatched: (state: IInitialState, action): void => {
            const { payload } = action
            const watchedId: number = payload
            
            const watched = state.watched.filter((id: number) => id !== watchedId)
            state.watched = watched
        },
        addReview: (state: IInitialState, action): void => {
            const { payload } = action
            const { review, id, movieId, date }: IReview = payload
    
            state.reviews.push({review, id, date, movieId})  
        },
        removeReview: (state: IInitialState, action): void => {
            const { payload } = action
            const id: number = payload

            const reviews = state.reviews.filter((item: IReview) => item.id !== id)
            state.reviews = reviews
        },
        removeReviewByMovieId: (state: IInitialState, action): void => {
            const { payload } = action
            const movieId: number = payload

            const reviews = state.reviews.filter((item: IReview) => item.movieId !== movieId)
            state.reviews = reviews
        },
        addRate: (state: IInitialState, action): void => {
            const { payload } = action
            const { rate, id, movieId }: IRate = payload

            const movieIds: number[] = state.rates.map((item: IRate) => item.movieId)
            const isExist: boolean = movieIds.includes(movieId)
            
            if(!isExist) {
                state.rates.push({rate, id, movieId})
            } else {
                const rates = state.rates.map((item: IRate) => (item.movieId === movieId ? {...item, rate} : item ))
                state.rates = rates
            }
        },
        removeRateByMovieId: (state: IInitialState, action): void => {
            const { payload } = action
            const movieId: number = payload

            const rates = state.rates.filter((item: IRate) => item.movieId !== movieId)
            state.rates = rates
        },
    }
})

export const { addMovies, addMovie, removeMovie, addWatched, removeWatched, addReview, removeReview, removeReviewByMovieId, addRate, removeRateByMovieId } = moviesSlice.actions
export default moviesSlice.reducer