import { Animated, Easing, Pressable, StyleSheet, Text, View } from "react-native";
import { useAnimation } from "../../hooks/useAnimation";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const Animation101Screen = () => {
    const {fadeIn, fadeOut, animatedOpacity, animatedTop, startMovingPosition } = useAnimation();
    const {colors} = useContext(ThemeContext);

    const fadeInStartMoving = () => {
        fadeIn({});
        startMovingPosition({initialPosition: -100, easing: Easing.elastic(1), duration: 750});
    };

    const fadeOutStartMoving = () => {
        fadeOut({callback: () => animatedTop.resetAnimation()});
    };

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.purpleBox, {opacity: animatedOpacity, transform: [{translateY: animatedTop}]}, {backgroundColor: colors.primary}]} />
            <Pressable onPress={fadeInStartMoving} style={{marginTop: 10}}>
                <Text>fadeIn</Text>
            </Pressable>
            <Pressable onPress={fadeOutStartMoving} style={{marginTop: 10}}>
                <Text>fadeOut</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    purpleBox: {
        width: 150,
        height: 150,
    },
});
