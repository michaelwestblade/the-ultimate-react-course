import {Movie} from "./Movie";

export interface MovieBoxProps {
    movie: Movie
    watched: boolean;
}

export default function MovieBox({movie, watched = false}: MovieBoxProps) {
    return <li key={movie?.imdbID}>
        <img src={movie?.Poster} alt={`${movie?.Title} poster`} />
        <h3>{movie?.Title}</h3>
        {watched ? <div>
            <p>
                <span>🗓</span>
                <span>{movie?.Year}</span>
            </p>
        </div> : <div>
            <p>
                <span>⭐️</span>
                <span>{movie.imdbRating}</span>
            </p>
            <p>
                <span>🌟</span>
                <span>{movie.userRating}</span>
            </p>
            <p>
                <span>⏳</span>
                <span>{movie.runtime} min</span>
            </p>
        </div>}
    </li>
}