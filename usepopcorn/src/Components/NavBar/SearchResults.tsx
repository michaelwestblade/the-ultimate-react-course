import {Movie} from "../MovieList/Movie";

export interface SearchResultsProps {
    movies: Movie[];
}

export default function SearchResults({movies}: SearchResultsProps) {
    return <p className="num-results">
        Found <strong>{movies.length}</strong> results
    </p>
}