export interface Movie {
    imdbID?: string;
    Poster?: string;
    Title?: string;
    Year?: string;
    imdbRating?: number;
    userRating?: number;
    runtime?: number;
}

export interface MovieResponse {
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
    imdbID?: string;
    userRating?: number;
    runtime?: number;
}

export interface MovieResponseParsed {
    title?: string;
    year?: number;
    poster?: string;
    runtime?: string;
    imdbRating?: number;
    plot?: string;
    released?: string;
    actors?: string;
    director?: string;
    genre?: string;
}