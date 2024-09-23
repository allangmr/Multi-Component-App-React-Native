import { useRef } from "react";
import { Animated, Easing } from "react-native";

export const useAnimation = () => {
    const animatedOpacity = useRef(new Animated.Value(0)).current;
    const animatedTop = useRef(new Animated.Value(0)).current;

    const fadeIn = ({duration = 300, toValue = 1, callback = () => {}}) => {
        // Animated.timing(animatedTop, {
        //     toValue: 0,
        //     duration: 700,
        //     useNativeDriver: true,
        //     // easing: Easing.elastic(1),
        //     easing: Easing.bounce,
        // }).start();

        Animated.timing(animatedOpacity, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: true,
        }).start(callback);
        // }).start(()=> console.log('animation finished')); // Callback, when animation is finished.
    };

    const fadeOut = ({duration = 300, toValue = 0, callback = () => {}}) => {
        Animated.timing(animatedOpacity, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: true,
        }).start(callback);
        // () => animatedTop.resetAnimation()
    };

    const startMovingPosition = ({initialPosition = 0, duration = 300, easing = Easing.linear, toValue = 0, callback = () => {}}) => {
        animatedTop.setValue(initialPosition);
        Animated.timing(animatedTop, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: true,
            easing: easing,
        }).start(callback);
    };
  return {
    //Props
    animatedOpacity,
    animatedTop,
    //Methods
    fadeIn,
    fadeOut,
    startMovingPosition,
  };
};
