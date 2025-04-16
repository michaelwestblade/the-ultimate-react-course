import MovieBox from "./MovieBox";
import {Movie, MovieResponse} from "./Movie";

export interface WatchedMoviesListProps{
    watched: MovieResponse[];
    handleMovieSelect: (id: string) => void;
}

export default function WatchedMoviesList({watched, handleMovieSelect}:WatchedMoviesListProps){
    return <ul className="list">
        {watched.map((movie) => (
            <MovieBox movie={movie} watched={true} handleMovieSelect={handleMovieSelect}/>
        ))}
    </ul>
}