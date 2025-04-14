import {Movie} from "./Movie";

export interface WatchedSummaryProps {
    watched: Movie[];
    avgImdbRating: number;
    avgUserRating: number;
    avgRuntime: number;

}
export default function WatchedSummary({watched, avgImdbRating, avgUserRating, avgRuntime}: WatchedSummaryProps) {
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