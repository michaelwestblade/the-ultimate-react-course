import {Movie, MovieResponse} from "./Movie";

export interface WatchedSummaryProps {
    watched: MovieResponse[];
}
export default function WatchedSummary({watched}: WatchedSummaryProps) {
    const average = (arr: (number | undefined)[] = []) =>
        arr.reduce((acc, cur, i, arr) => {
            return typeof(acc) !== 'undefined' && typeof(cur) !== 'undefined' ? acc + cur / arr.length : 0;
        }, 0) || 0;
    const avgImdbRating = average(watched.filter(movie => movie && movie.imdbRating).map((movie) => movie?.imdbRating));
    const avgUserRating = average(watched.filter(movie => movie && movie.userRating).map((movie) => movie?.userRating));
    const avgRuntime = average(watched.filter(movie => movie && movie.runtime).map((movie) => movie?.runtime));
    return <div className="summary">
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
}