import axios from 'axios';

const api = axios.create({
    baseURL : "https://api.themoviedb.org/3"
})
const API_KEY = "625233a01aa61c693c7a20462a4368cb";

const BASE_URL = "https://api.themoviedb.org/3";

interface IMovie {
    id: number;
    backdrop_path: string;
    poster_path: string;
    title: string;
    overview: string;
}

export interface IGetMoviesResult {
    dates: {
        maximum: string;
        minimum: string;
    };
    page: number;
    results: IMovie[];
    total_pages: number;
    total_results: number;
}

export const  _getMovies = {
    getNowPlayingList: () => api.get(`/movie/now_playing?api_key=${API_KEY}`)
}

export function getMovies() {
    return fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`).then(
        (response) => response.json()
    );
}