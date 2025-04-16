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
import ErrorMessage from "./Components/Error";

const OMDB_API_KEY = process.env.REACT_APP_OMDB_API_KEY;

function App() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [watched, setWatched] = useState<Movie[]>([]);
    const [query, setQuery] = useState<string>("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchMovies(){
            try {
                setLoading(true);
                setError('');
                const res = await fetch(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${query}`);

                if (!res.ok){
                    throw new Error("Could not fetch movies");
                }

                const data = await res.json();

                if (data.Response === 'False'){
                    throw new Error(`No movies found for search term ${query}`);
                }

                setMovies(data.Search);
                setLoading(false);
            } catch (error: any) {
                console.error(error);
                setError(error?.message);
                setLoading(false);
            }
        }

        if (query.length < 3){
            setMovies([]);
            setError('');
            return;
        }

        fetchMovies();
    }, [query])

    return (
        <div className="App">
            <NavBar>
                <Logo/>
                <Search query={query} setQuery={setQuery} />
                <SearchResults movies={movies}/>
            </NavBar>
            <StarRating maxStars={10}/>
            <Main>
                <ListBox>
                    {loading && <Loader/>}
                    {!loading && !error && <MovieList movies={movies} />}
                    {error && error !== '' && <ErrorMessage error={error} />}
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
