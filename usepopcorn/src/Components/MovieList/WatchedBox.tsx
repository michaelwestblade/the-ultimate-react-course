import {useState} from "react";
import {Movie} from "./Movie";

export interface WatchedBoxProps {
    movies: Movie[];
}

const tempWatchedData = [
    {
        imdbID: "tt1375666",
        Title: "Inception",
        Year: "2010",
        Poster:
            "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        runtime: 148,
        imdbRating: 8.8,
        userRating: 10,
    },
    {
        imdbID: "tt0088763",
        Title: "Back to the Future",
        Year: "1985",
        Poster:
            "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        runtime: 116,
        imdbRating: 8.5,
        userRating: 9,
    },
];

export default function WatchedBox({}: WatchedBoxProps) {
    const [watched, setWatched] = useState<Movie[]>(tempWatchedData);
    const [isOpen, setIsOpen] = useState(true);
    const average = (arr: (number | undefined)[] = []) =>
        arr.reduce((acc, cur, i, arr) => {
            return typeof(acc) !== 'undefined' && typeof(cur) !== 'undefined' ? acc + cur / arr.length : 0;
        }, 0);
    const avgImdbRating = average(watched.filter(movie => movie && movie.imdbRating).map((movie) => movie?.imdbRating));
    const avgUserRating = average(watched.filter(movie => movie && movie.userRating).map((movie) => movie?.userRating));
    const avgRuntime = average(watched.filter(movie => movie && movie.runtime).map((movie) => movie?.runtime));

    return <div className="box">
        <button
            className="btn-toggle"
            onClick={() => setIsOpen((open) => !open)}
        >
            {isOpen ? "–" : "+"}
        </button>
        {isOpen && (
            <>
                <div className="summary">
                    <h2>Movies you watched</h2>
                    <div>
                        <p>
                            <span>#️⃣</span>
                            <span>{watched.length} movies</span>
                        </p>
                        <p>
                            <span>⭐️</span>
                            <span>{avgImdbRating}</span>
                        </p>
                        <p>
                            <span>🌟</span>
                            <span>{avgUserRating}</span>
                        </p>
                        <p>
                            <span>⏳</span>
                            <span>{avgRuntime} min</span>
                        </p>
                    </div>
                </div>

                <ul className="list">
                    {watched.map((movie) => (
                        <li key={movie.imdbID}>
                            <img src={movie.Poster} alt={`${movie.Title} poster`} />
                            <h3>{movie.Title}</h3>
                            <div>
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
                            </div>
                        </li>
                    ))}
                </ul>
            </>
        )}
    </div>
}