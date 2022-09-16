import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';

import { View, Text, Button, StyleSheet, Image, Dimensions, ActivityIndicator, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { RootStackParams } from '../navigation/Navigation';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';
import Icon from 'react-native-vector-icons/Ionicons';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { };

// interface Props extends DrawerScreenProps<any, any> { }
export const DetailScreen = ({ route,navigation }: Props) => {



  const movie = route.params;
  console.log('pelicula recibida:', movie.title);

  const { id, original_title, poster_path, overview } = movie;

  const { isLoading, movieFull, cast } = useMovieDetails(id);

  console.log('isLoading adicional: ', isLoading);


  const uri = `https://image.tmdb.org/t/p/w500${poster_path}`;
  // const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;



  return (

    <ScrollView>
      <View style={styles.imageContainner}>
        <View style={styles.imageBorder}>
          <Image source={{ uri }} style={styles.posterImage} />
        </View>
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subtitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
      <View>

        {
          isLoading
            ? <ActivityIndicator size={30} color="grey" style={{ marginTop: 20 }} />
            : <MovieDetails movieFull={movieFull!} cast={cast} />
        }
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-back-outline" size={40} color="white"/>
      </TouchableOpacity>
      {/* boton de regresar */}

    </ScrollView>
  )
}
const styles = StyleSheet.create({
  imageContainner: {
    //backgroundColor: 'red',
    //overflow: 'hidden',
    height: screenHeight * 0.7,
    width: '100%',
    // paddingBottom:5,
    //paddingHorizontal:5,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7.84,
    elevation: 10,
    //borderRadius: 25,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,

  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  posterImage: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  overview: {
    fontSize: 16,
    textAlign: 'justify',
    opacity: 0.8,
  },
  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 30,
    left: 5,
  },


});
