import {Movie, MovieResponse} from "./Movie";
import MovieBox from "./MovieBox";

export interface MovieListProps {
    movies: MovieResponse[];
    handleMovieSelect: (id: string) => void;
}

export default function MovieList({movies, handleMovieSelect}: MovieListProps) {
    return <ul className="list list-movies">
        {movies?.map((movie) => <MovieBox movie={movie} watched={false} handleMovieSelect={handleMovieSelect} />)}
    </ul>
}