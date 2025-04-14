import {useState} from "react";
import {Movie} from "./Movie";
import MovieList from "./MovieList";

export interface ListBoxProps {
    movies: Movie[];
}

export default function ListBox({movies}: ListBoxProps) {
    const [isOpen, setIsOpen] = useState(true);

    return <div className="box">
        <button
            className="btn-toggle"
            onClick={() => setIsOpen((open) => !open)}
        >
            {isOpen ? "–" : "+"}
        </button>
        {isOpen && (
            <MovieList movies={movies} />
        )}
    </div>
}