import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import { Cast } from '../interfaces/credits.interface';

interface props {
    actor: Cast;
}

export const ActorCard = ({ actor }: props) => {
    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
    return (
        <View style={styles.containnerTop}>
            {
                actor.profile_path && (

                    <Image
                        source={{ uri }}
                        style={{ width: 50, height: 50, borderRadius: 10 }}
                    />
                )
            }
            <View key={actor.id} style={styles.container}>
            <View style={styles.actorInfo}>
                 <Text style={{ fontSize: 18, opacity: 0.8, fontWeight: 'bold' }}>{actor.name}</Text>
            <Text style={{ fontSize: 12, opacity: 0.8 }}>{actor.character}</Text>
            </View>
           
        </View>
        </View>

        

    )
}
const styles = StyleSheet.create({
    containnerTop: {
        flexDirection: 'row',
        backgroundColor: 'white',
        shadowColor: "grey",
        borderRadius: 10,
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.28,
        shadowRadius: 7.00,
        elevation: 7,
        marginHorizontal: 5,
        marginBottom: 10,
        paddingRight: 10,
        paddingLeft: 3,
    },
    container: {
        flexDirection: 'column',
       
    },
    actorInfo: {
        marginLeft: 5,
    }

});
