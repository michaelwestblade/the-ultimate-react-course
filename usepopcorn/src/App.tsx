import React, {useState} from 'react';
import NavBar from "./Components/NavBar/NavBar";
import ListBox from "./Components/MovieList/ListBox";
import {MovieResponse} from "./Components/MovieList/Movie";
import Logo from "./Components/NavBar/Logo";
import Search from "./Components/NavBar/Search";
import SearchResults from "./Components/NavBar/SearchResults";
import Main from "./Components/Main";
import MovieList from "./Components/MovieList/MovieList";
import WatchedSummary from "./Components/MovieList/WatchedSummary";
import WatchedMoviesList from "./Components/MovieList/WatchedMoviesList";
import Loader from "./Components/Loader";
import ErrorMessage from "./Components/Error";
import {SelectedMovie} from "./Components/MovieList/SelectedMovie";
import {useMovies} from "./Hooks/useMovies";

function App() {
    const [watched, setWatched] = useState<MovieResponse[]>([]);
    const [query, setQuery] = useState<string>("");
    const [selectedId, setSelectedId] = useState<string | null>('tt1375666');

    const handleMovieSelect = (id: string) => {
        setSelectedId((selectedId) => id === selectedId ? null : id);
    }

    const handleCloseMovie = () => {
        setSelectedId(null);
    }

    const handleAddWatchedMovie = (movie: MovieResponse) => {
        setWatched(watched => [...watched, movie])
    }

    const onDeleteWatchedMovie = (id: string) => {
        setWatched(watched => watched.filter(movie => movie.imdbID !== id));
    }

    const [movies, loading, error] = useMovies(query, handleCloseMovie);

    return (
        <div className="App">
            <NavBar>
                <Logo/>
                <Search query={query} setQuery={setQuery} />
                <SearchResults movies={movies}/>
            </NavBar>
            <Main>
                <ListBox>
                    {loading && <Loader/>}
                    {!loading && !error && <MovieList onDeleteWatchedMovie={onDeleteWatchedMovie} movies={movies} handleMovieSelect={handleMovieSelect}/>}
                    {error && error !== '' && <ErrorMessage error={error} />}
                </ListBox>
                <ListBox>
                    {selectedId ?
                        <SelectedMovie watched={watched.some(_movie => _movie.imdbID === selectedId)} onAddWatched={handleAddWatchedMovie} selectedId={selectedId} onCloseMovie={handleCloseMovie}/> :
                        <>
                            <WatchedSummary watched={watched} />
                            <WatchedMoviesList onDeleteWatchedMovie={onDeleteWatchedMovie} watched={watched} handleMovieSelect={handleMovieSelect}/>
                        </>}
                </ListBox>
            </Main>
        </div>
    );
}

export default App;
