import {Movie, MovieResponse} from "../MovieList/Movie";

export interface SearchResultsProps {
    movies: MovieResponse[];
}

export default function SearchResults({movies}: SearchResultsProps) {
    return <p className="num-results">
        Found <strong>{movies.length}</strong> results
    </p>
}