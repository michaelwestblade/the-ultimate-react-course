import {Movie} from "./Movie";
import MovieBox from "./MovieBox";

export interface MovieListProps {
    movies: Movie[];
    handleMovieSelect: (id: string) => void;
}

export default function MovieList({movies, handleMovieSelect}: MovieListProps) {
    return <ul className="list list-movies">
        {movies?.map((movie) => <MovieBox movie={movie} watched={false} handleMovieSelect={handleMovieSelect} />)}
    </ul>
}