
import { useState, useEffect } from 'react';
import movieDb from '../api/movieDB';
import { Cast, CreditsResponse } from '../interfaces/credits.interface';
import { MovieFull } from '../interfaces/movie.interface';

interface MovieDetails {
    //cast: Cast[];
    isLoading: boolean;
    movieFull?: MovieFull;
    cast: Cast[];
}




export const useMovieDetails = (movieId: number) => {

    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: []
    });

    const getMovieDetails = async () => {


        const movieDetailsPromise =  movieDb.get<MovieFull>(`/${movieId}`);
        const castDetailsPromise =  movieDb.get<CreditsResponse>(`/${movieId}/credits`);

        const [movieDetailsResp, castDetailsResp] = await Promise.all([
            movieDetailsPromise,
            castDetailsPromise
        ]);
        setState({
            isLoading: false,
            movieFull: movieDetailsResp.data,
            cast: castDetailsResp.data.cast
        });
       




    }
    useEffect(() => {
        getMovieDetails();
    }, []);



    return {
        ...state
    }
}
