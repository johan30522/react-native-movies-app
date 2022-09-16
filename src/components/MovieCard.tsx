import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native';
import { Movie } from '../interfaces/movie.interface';
import { styles } from '../theme/appTheme';

interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}
//https://image.tmdb.org/t/p/w500/sJiHVM0A3OXDVxl4Z6a7ihMPHfm.jpg
export const MovieCard = ({ movie, height = 420, width = 300 }: Props) => {
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const navigation = useNavigation<any>();

    const onPress = () => {
        //console.log('pelicula enviada:', movie);
        navigation.navigate('DetailScreen', movie);
    }

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => onPress()}
            style={{ 
                width, 
                height, 
                marginHorizontal: 5 ,
                paddingHorizontal: 5, 
                paddingBottom: 20
            }}
        >
            <View style={styles.imageContainer}>
                <Image source={{ uri }} style={styles.image} />
            </View>

        </TouchableOpacity>
    )
}
