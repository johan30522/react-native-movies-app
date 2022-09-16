import React from 'react'
import { Animated, View, Button } from 'react-native';
import { useRef } from 'react';
import { useOpacity } from '../hooks/useOpacity';

export const FadeScreen = () => {

    const { fadeIn, fadeOut, opacity } = useOpacity();


    return (
        <View style={
            // eslint-disable-next-line react-native/no-inline-styles
            {
                flex: 1,
                backgroundColor: 'grey',
                justifyContent: 'center',
                alignItems: 'center',
            }
        }>
            <Animated.View style={
                // eslint-disable-next-line react-native/no-inline-styles
                {
                    //flex: 1,
                    backgroundColor: '#084F6A',
                    width: 150,
                    height: 150,
                    borderColor: 'white',
                    borderWidth: 10,
                    marginBottom: 10,
                    opacity: opacity,
                }}
            />
            <Button title="Fade In" onPress={fadeIn} />

            <Button title="Fade out" onPress={() => fadeOut()} />

        </View>
    )
}
