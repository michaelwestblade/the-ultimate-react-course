import {useState} from "react";
import {Movie} from "./Movie";
import WatchedSummary from "./WatchedSummary";
import MovieBox from "./MovieBox";

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
        }, 0) || 0;
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
                <WatchedSummary watched={watched} avgImdbRating={avgImdbRating} avgUserRating={avgUserRating} avgRuntime={avgRuntime} />

                <ul className="list">
                    {watched.map((movie) => (
                        <MovieBox movie={movie} watched={true} />
                    ))}
                </ul>
            </>
        )}
    </div>
}