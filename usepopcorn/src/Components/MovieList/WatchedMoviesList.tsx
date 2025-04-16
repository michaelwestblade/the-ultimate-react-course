import MovieBox from "./MovieBox";
import {MovieResponse} from "./Movie";

export interface WatchedMoviesListProps {
    watched: MovieResponse[];
    handleMovieSelect: (id: string) => void;
    onDeleteWatchedMovie: (id: string) => void;
}

export default function WatchedMoviesList({watched, handleMovieSelect, onDeleteWatchedMovie}: WatchedMoviesListProps) {
    return <ul className="list">
        {watched.map((movie) => (
            <MovieBox movie={movie}
                      watched={watched.some((_movie: MovieResponse): boolean => _movie.imdbID == movie.imdbID)}
                      handleMovieSelect={handleMovieSelect} onDeleteWatchedMovie={onDeleteWatchedMovie}/>
        ))}
    </ul>
}