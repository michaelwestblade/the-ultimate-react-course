import React, {useState} from 'react';
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

const tempMovieData = [
    {
        imdbID: "tt1375666",
        Title: "Inception",
        Year: "2010",
        Poster:
            "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    },
    {
        imdbID: "tt0133093",
        Title: "The Matrix",
        Year: "1999",
        Poster:
            "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    },
    {
        imdbID: "tt6751668",
        Title: "Parasite",
        Year: "2019",
        Poster:
            "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
    },
];

const tempWatchedData = [
    {
        imdbID: "tt1375666",
        Title: "Inception",
        Year: "2010",
        Poster:
            "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        runtime: 148,
        imdbRating: 8.8,
        userRating: 10,
    },
    {
        imdbID: "tt0088763",
        Title: "Back to the Future",
        Year: "1985",
        Poster:
            "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        runtime: 116,
        imdbRating: 8.5,
        userRating: 9,
    },
];

function App() {
    const [movies, setMovies] = useState<Movie[]>(tempMovieData);
    const [watched, setWatched] = useState<Movie[]>(tempWatchedData);

    return (
        <div className="App">
            <NavBar>
                <Logo/>
                <Search/>
                <SearchResults movies={movies}/>
            </NavBar>
            <Main>
                <ListBox>
                    <MovieList movies={movies} />
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
