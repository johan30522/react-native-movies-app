

import { useRef } from 'react'
import { Animated } from 'react-native';

export const useOpacity = () => {
  

    const opacity = useRef(new Animated.Value(0.5)).current;


    const fadeIn = (callback?:()=>{}) => {
        console.log('fadeIn');
        Animated.timing(
            opacity,
            {
                toValue: 1,
                duration: 300,
                useNativeDriver: true
            }
        ).start(()=>callback ? callback():null);
    }

    const fadeOut = (duration:number=300) => {
        console.log('fadeOut');
        Animated.timing(
            opacity,
            {
                toValue: 0,
                duration,
                useNativeDriver: true
            }
        ).start();
    }

    return{
        opacity,
        fadeIn,
        fadeOut
    }


}
