

import React from 'react'
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import currencyFormatter from 'currency-formatter';

import { Cast } from '../interfaces/credits.interface';
import { MovieFull } from '../interfaces/movie.interface';
import { ActorCard } from './ActorCard';
import { FlatList } from 'react-native-gesture-handler';

interface props {
    movieFull: MovieFull;
    cast: Cast[];
}

export const MovieDetails = ({
    movieFull,
    cast
}: props) => {
    return (
        <>
            {/* Detalles */}
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="star-outline" size={16} color="grey" />
                    <Text style={{ fontSize: 12, fontWeight: 'bold', marginLeft: 10 }}>{movieFull.vote_average}</Text>
                    <Text style={{ fontSize: 12, opacity: 0.8 }}> - {movieFull.genres.map(g => g.name).join(', ')}</Text>
                </View>

            </View>
            {/* Historia */}
            <View style={{ marginHorizontal: 20 }}>
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>Historia</Text>
                <Text style={{ fontSize: 16, opacity: 0.8 }}>{movieFull.overview}</Text>
            </View>
            {/* Presupuesto */}
            <View style={{ marginHorizontal: 20 }}>
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>Presupuesto</Text>
                <Text style={{ fontSize: 18, opacity: 0.8 }}>{
                    currencyFormatter.format(movieFull.budget, { code: 'USD' })
                }</Text>
            </View>
            {/* Casting */}


            <View style={{ marginHorizontal: 20, marginBottom:100 }}>
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>Actores</Text>

                    {/* {
                        cast.map(actor => (
                            <ActorCard
                                key={actor.id}
                                actor={actor}
                            />

                        ))
                    } */}
                    <FlatList
                        data={cast}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => <ActorCard actor={item} />}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{ marginTop: 10, height: 60 }}
                    />
      
            </View>
        </>
    )
}
