import React, {useEffect, useState} from "react";
import StarRating from "./StarRating";
import Loader from "../Loader";
import ErrorMessage from "../Error";
import {MovieResponse} from "./Movie";

export interface SelectedMovieProps {
    selectedId: string;
    onCloseMovie: () => void;
    watched: boolean;
    onAddWatched: (movie: MovieResponse) => void;
}

const OMDB_API_KEY = process.env.REACT_APP_OMDB_API_KEY;

export function SelectedMovie({selectedId, onCloseMovie, onAddWatched, watched}: SelectedMovieProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>("");
    const [movie, setMovie] = useState<MovieResponse>({});
    const [userRating, setUserRating] = useState<number | null>(null);
    const {
        Title: title,
        Year: year,
        Poster: poster,
        imdbRating,
        Plot: plot,
        Released: released,
        Actors: actors,
        Director: director,
        Genre: genre,
        Runtime: runtime
    } = movie;

    const handleAdd = () => {
        onAddWatched({...movie, userRating: userRating || 0});
        onCloseMovie();
    }

    useEffect(function () {
        async function getMovieDetails() {
            try {
                setIsLoading(true);
                const res = await fetch(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${selectedId}`);

                if (!res.ok) {
                    throw new Error("Could not fetch movies");
                }

                const data = await res.json();

                if (data.Response === 'False') {
                    throw new Error(`No movies found for id ${selectedId}`);
                }

                setMovie(data);
                setIsLoading(false);
            } catch (error: any) {
                setIsLoading(false);
                setError(error.message);
                console.error(error);
            }
        }

        getMovieDetails();
    }, [selectedId]);

    return <div className="details">
        {isLoading && <Loader/>}
        {error && error !== '' && <ErrorMessage error={error}/>}
        {!isLoading && !error && <>
            <header>
                <button className="btn-back" onClick={onCloseMovie}>&larr;</button>
                <img src={poster} alt={`${movie?.Title} poster`}/>
                <div className="details-overview">
                    <h2>{title}</h2>
                    <p>{released} &bull; {runtime}</p>
                    <p>{genre}</p>
                    <p><span>⭐️</span>{imdbRating}</p>
                </div>
            </header>
            <section>
                <div className="rating">
                    {!watched ?
                        <>
                            <StarRating maxStars={10} size={24} onSetRating={setUserRating}/>
                            {userRating && <button onClick={handleAdd} className="btn-add">+Add to list</button>}
                        </> :
                        <p>You have already watched this movie</p>}
                </div>
                <p><em>{plot}</em></p>
                <p>Starring {actors}</p>
                <p>Directed by {director}</p>
            </section>
        </>}
    </div>
}