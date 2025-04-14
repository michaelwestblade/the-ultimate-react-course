import {useState} from "react";

export interface SearchProps {}

export default function Search() {
    const [query, setQuery] = useState('');

    return <input type="text" className="search" placeholder="Search movies..." value={query} onChange={(e) => setQuery(e.target.value)}/>
}