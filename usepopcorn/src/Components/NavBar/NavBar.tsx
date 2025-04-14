import {useState} from "react";

export interface NavBarProps {
    movies: string[];
}

export default function NavBar({movies}: NavBarProps) {
    const [query, setQuery] = useState('');

    return <nav className="nav-bar">
        <div className="logo">
            <span role="img"></span>
            <h1>usePopcorn</h1>
        </div>
        <input type="text" className="search" placeholder="Search movies..." value={query} onChange={(e) => setQuery(e.target.value)}/>
        <p className="num-results">
            Found <strong>{movies.length}</strong> results
        </p>
    </nav>
}