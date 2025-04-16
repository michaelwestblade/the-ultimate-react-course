import {useEffect, useState} from "react";
import StarRating from "./StarRating";

export interface SelectedMovieProps {
    selectedId: string;
    onCloseMovie: () => void;
}

const OMDB_API_KEY = process.env.REACT_APP_OMDB_API_KEY;

export function SelectedMovie({selectedId, onCloseMovie}: SelectedMovieProps) {
    const [movie, setMovie] = useState<{
        Title?: string;
        Year?: number;
        Poster?: string;
        Runtime?: string;
        imdbRating?: number;
        Plot?: string;
        Released?: string;
        Actors?: string;
        Director?: string;
        Genre?: string;
    }>({});
    const {Title: title, Year: year, Poster: poster, imdbRating, Plot: plot, Released: released, Actors: actors, Director: director, Genre: genre, Runtime: runtime} = movie;

    useEffect(function (){
        async function getMovieDetails() {
            try {
                const res = await fetch(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${selectedId}`);

                if (!res.ok){
                    throw new Error("Could not fetch movies");
                }

                const data = await res.json();

                if (data.Response === 'False'){
                    throw new Error(`No movies found for id ${selectedId}`);
                }

                setMovie(data);
            } catch (error) {
                console.error(error);
            }
        }

        getMovieDetails();
    }, [selectedId]);

    return <div className="details">
        <header>
            <button className="btn-back" onClick={onCloseMovie}>&larr;</button>
            <img src={poster} alt={`${movie?.Title} poster`} />
            <div className="details-overview">
                <h2>{title}</h2>
                <p>{released} &bull; {runtime}</p>
                <p>{genre}</p>
                <p><span>⭐️</span>{imdbRating}</p>
            </div>
        </header>
        <section>
            <StarRating maxStars={10} size={24}/>
            <p><em>{plot}</em></p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
        </section>
    </div>
}