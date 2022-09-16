
import React from 'react'
import Carousel from 'react-native-snap-carousel';
import { View, ActivityIndicator, Dimensions } from 'react-native';


import { MovieCard } from '../components/MovieCard';

import { useMovies } from '../hooks/useMovies';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackGround } from '../components/GradientBackGround';
import { useContext, useEffect } from 'react';
import { GradientContext } from '../context/GradientContext';
import { geImageColor } from '../helpers/getColors';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {


    const { isLoading, nowPlaying, popular, topRated, upcoming } = useMovies();
    const { top } = useSafeAreaInsets();
    const {setMainColors} = useContext(GradientContext)


    const getPosterColor = async (index: number) => {

        const movie = nowPlaying[index];
        const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;


        console.log('intenta obtener el color');
        //const {prima}=await ImageColors.getColors(uri, { });
        const { primary='green', secondary='orange' } = await geImageColor(uri);

        console.log('color obtenido');
        
        console.log(primary);
        console.log(secondary);

        setMainColors({primary, secondary});
        
    }

    useEffect(() => {
        if (nowPlaying.length > 0) {
            getPosterColor(0);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nowPlaying])
    


    if (isLoading) {
        return (
            <View style={styles.activityIndicator}>
                <ActivityIndicator size={100} color="red" />
            </View>
        )
    }



    return (
        <GradientBackGround>

            <ScrollView>
                <View style={{ ...styles.container, marginTop: top + 20 }}>

                    {/* Carrusel Principal */}
                    <View style={{
                        height: 440
                    }}>
                        <Carousel
                            data={nowPlaying!}
                            renderItem={({ item }: any) => <MovieCard movie={item} />}
                            sliderWidth={windowWidth}
                            itemWidth={300}
                            //inactiveSlideOpacity={0.9}
                            onSnapToItem={(index) => getPosterColor(index)}
                        />
                    </View>

                    {/* Peliculas Populares */}
                    <HorizontalSlider title="Popular" movies={popular!} />
                    {/* Peliculas TopRated */}
                    <HorizontalSlider title="Top Rated" movies={topRated!} />
                    {/* Peliculas UpComming */}
                    <HorizontalSlider title="Up Comming" movies={upcoming!} />



                </View>
            </ScrollView>
        </GradientBackGround>

    )
}
