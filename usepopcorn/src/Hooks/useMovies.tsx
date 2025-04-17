import {useEffect, useState} from "react";
import {MovieResponse} from "../Components/MovieList/Movie";

const OMDB_API_KEY = process.env.REACT_APP_OMDB_API_KEY;

export function useMovies(query: string, onSuccess?: () => void): [MovieResponse[], boolean, string] {
    const [movies, setMovies] = useState<MovieResponse[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController();

        async function fetchMovies(){
            try {
                setLoading(true);
                setError('');
                const res = await fetch(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${query}`, {signal: controller.signal});

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
        onSuccess?.();

        return () => {
            controller.abort();
        }
    }, [query]);

    return [movies, loading, error];
}