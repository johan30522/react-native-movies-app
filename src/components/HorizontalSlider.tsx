import React from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Movie } from '../interfaces/movie.interface';
import { MovieCard } from './MovieCard';

interface Props {
    title?: string;
    movies: Movie[];
}   

export const HorizontalSlider = ({
    title,
    movies
}:Props) => {
  return (
    <View style={
        {
            height: (title) ? 250 : 200
        }}>
        {
            (title) && <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{title}</Text>
        }

        <FlatList
            data={movies}
            renderItem={({ item }: any) => (
                <MovieCard movie={item} height={180} width={130} />
            )}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        />

    </View>
  )
}
