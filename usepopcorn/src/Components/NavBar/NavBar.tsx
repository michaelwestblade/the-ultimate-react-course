import {useState} from "react";
import Search from "./Search";
import Logo from "./Logo";
import SearchResults from "./SearchResults";

export interface NavBarProps {
    movies: string[];
}

export default function NavBar({movies}: NavBarProps) {
    return <nav className="nav-bar">
        <Logo/>
        <Search/>
        <SearchResults movies={movies}/>
    </nav>
}