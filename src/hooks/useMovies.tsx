import { useEffect, useState } from "react";
import movieDb from "../api/movieDB";
import { Movie, MovieDB } from "../interfaces/movie.interface";

interface MoviesState {
    nowPlaying: Movie[];
    popular: Movie[];
    topRated: Movie[];
    upcoming: Movie[];
}

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [movieState, setMovieState] = useState<MoviesState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: []
    });


    const getMovies = async () => {
        console.log('llama a la api Prueba');
        const nowPlayingPromise=movieDb.get<MovieDB>('/now_playing');
        const popularPromise   =movieDb.get<MovieDB>('/popular');
        const topRatedPromise  =movieDb.get<MovieDB>('/top_rated');
        const upComingPromise  =movieDb.get<MovieDB>('/upcoming');

   
        const response=await Promise.all([
            nowPlayingPromise,
            popularPromise,
            topRatedPromise,
            upComingPromise
        ]);

        // console.log('nowPlayingPromise:',response[0].data.results);
        // console.log('popularPromise:',response[1].data.results);
        // console.log('topRatedPromise:',response[2].data.results);
        // console.log('upComingPromise:',response[3].data.results);

        setMovieState({
            nowPlaying: response[0].data.results,
            popular: response[1].data.results,
            topRated: response[2].data.results,
            upcoming: response[3].data.results,
        });


        setIsLoading(false);
    }

    //se ejecuta al montar el componente
    useEffect(() => {
        //Intenta obtener la coleccion de peliculas
        console.log('getMovies');
        getMovies();
    }, []);

    return {
        isLoading,
        ...movieState,
        getMovies
    }

}
