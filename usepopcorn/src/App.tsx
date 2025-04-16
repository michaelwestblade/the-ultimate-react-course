import React, {useEffect, useState} from 'react';
import NavBar from "./Components/NavBar/NavBar";
import ListBox from "./Components/MovieList/ListBox";
import {Movie} from "./Components/MovieList/Movie";
import Logo from "./Components/NavBar/Logo";
import Search from "./Components/NavBar/Search";
import SearchResults from "./Components/NavBar/SearchResults";
import Main from "./Components/Main";
import MovieList from "./Components/MovieList/MovieList";
import WatchedSummary from "./Components/MovieList/WatchedSummary";
import WatchedMoviesList from "./Components/MovieList/WatchedMoviesList";
import StarRating from "./Components/MovieList/StarRating";
import Loader from "./Components/Loader";

const OMDB_API_KEY = process.env.REACT_APP_OMDB_API_KEY;

function App() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [watched, setWatched] = useState<Movie[]>([]);
    const [query, setQuery] = useState<string>("there");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchMovies(){
            setLoading(true);
            const res = await fetch(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${query}`);
            const data = await res.json();
            setMovies(data.Search);
            setLoading(false);
        }

        fetchMovies();
    }, [query])

    return (
        <div className="App">
            <NavBar>
                <Logo/>
                <Search/>
                <SearchResults movies={movies}/>
            </NavBar>
            <StarRating maxStars={10}/>
            <Main>
                <ListBox>
                    {loading ? <Loader/> : <MovieList movies={movies} />}
                </ListBox>
                <ListBox>
                    <WatchedSummary watched={watched} />
                    <WatchedMoviesList watched={watched} />
                </ListBox>
            </Main>
        </div>
    );
}

export default App;
