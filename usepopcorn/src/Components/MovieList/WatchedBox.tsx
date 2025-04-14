import {useState} from "react";
import {Movie} from "./Movie";
import WatchedSummary from "./WatchedSummary";
import WatchedMoviesList from "./WatchedMoviesList";

export interface WatchedBoxProps {
    watched: Movie[];
}

export default function WatchedBox({watched}: WatchedBoxProps) {
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
                <WatchedMoviesList watched={watched} />
            </>
        )}
    </div>
}