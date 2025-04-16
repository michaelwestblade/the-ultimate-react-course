import {useState} from "react";

export interface SearchProps {
    query: string;
    setQuery: (query: string) => void;
}

export default function Search({ query, setQuery }: SearchProps) {

    return <input type="text" className="search" placeholder="Search movies..." value={query} onChange={(e) => setQuery(e.target.value)}/>
}