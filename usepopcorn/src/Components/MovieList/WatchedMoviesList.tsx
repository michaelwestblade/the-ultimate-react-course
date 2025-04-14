import MovieBox from "./MovieBox";
import {Movie} from "./Movie";

export interface WatchedMoviesListProps{
    watched: Movie[];
}

export default function WatchedMoviesList({watched}:WatchedMoviesListProps){
    return <ul className="list">
        {watched.map((movie) => (
            <MovieBox movie={movie} watched={true} />
        ))}
    </ul>
}