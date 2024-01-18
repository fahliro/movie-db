export interface IMovie {
    id: number,
    title: string,
    release_date: string,
    overview: string,
    backdrop_path: string,
    poster_path: string
}
export interface IInitialState {
    movies: IMovie[],
    movie: IMovie,
    watched: number[]
    reviews: IReview[],
    rates: IRate[]
}

export interface IReview {
    id: number,
    movieId: number,
    date: string,
    review: string,
}

export interface IRate {
    id: number,
    movieId: number,
    rate: number
}