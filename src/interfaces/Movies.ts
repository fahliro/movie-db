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
    reviews: IReview[]
}

export interface IReview {
    idReview: number,
    id: number,
    date: string,
    review: string,
}