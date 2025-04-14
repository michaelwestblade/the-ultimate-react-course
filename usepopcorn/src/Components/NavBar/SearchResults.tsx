export interface SearchResultsProps {
    movies: string[];
}

export default function SearchResults({movies}: SearchResultsProps) {
    return <p className="num-results">
        Found <strong>{movies.length}</strong> results
    </p>
}