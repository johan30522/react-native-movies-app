import React from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useContext, useEffect } from 'react';
import { GradientContext } from '../context/GradientContext';
import { useOpacity } from '../hooks/useOpacity';


interface Props {
  children: JSX.Element | JSX.Element[];
}

export const GradientBackGround = ({ children }: Props) => {

  const { colors, prevColors,setPrevMainColors } = useContext(GradientContext);
  console.log(colors);
  const {fadeIn,opacity,fadeOut}=useOpacity();



useEffect(() => {
  fadeIn(()=>{
    setPrevMainColors(colors);
    fadeOut(300);
  });
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [colors])



  return (
    <View style={
      {
        flex: 1,
      }
    }>

      <LinearGradient
        colors={[prevColors.primary, prevColors.secondary, 'white']}
        style={{ ...StyleSheet.absoluteFillObject }}
        start={{ x: 0, y: 0.75 }}
        end={{ x: 0.5, y: 1 }}
      />

      <Animated.View style={{ 
        ...StyleSheet.absoluteFillObject, 
        opacity:opacity
        }} >
        <LinearGradient
          colors={[colors.primary, colors.secondary, 'white']}
          style={{ ...StyleSheet.absoluteFillObject }}
          start={{ x: 0, y: 0.75 }}
          end={{ x: 0.5, y: 1 }}
        />
      </Animated.View>


      {children}


    </View>
  )
}
