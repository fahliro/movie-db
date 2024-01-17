export interface IMovie {
    id: string,
    title: string,
    release_date: string,
    overview: string,
    backdrop_path: string,
    poster_path: string
}
export interface IInitialState {
    movies: IMovie[],
    movie: IMovie
}