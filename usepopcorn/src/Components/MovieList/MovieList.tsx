import {Movie} from "./Movie";
import MovieBox from "./MovieBox";

export interface MovieListProps {
    movies: Movie[];
}

export default function MovieList({movies}: MovieListProps) {
    return <ul className="list">
        {movies?.map((movie) => <MovieBox movie={movie} />)}
    </ul>
}