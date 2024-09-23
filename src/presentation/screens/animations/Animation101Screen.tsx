import { Animated, Easing, Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../../config/theme/theme";
import { useAnimation } from "../../hooks/useAnimation";

export const Animation101Screen = () => {
    const {fadeIn, fadeOut, animatedOpacity, animatedTop, startMovingPosition } = useAnimation();

    const fadeInStartMoving = () => {
        fadeIn({});
        startMovingPosition({initialPosition: -100, easing: Easing.elastic(1), duration: 750});
    };

    const fadeOutStartMoving = () => {
        fadeOut({callback: () => animatedTop.resetAnimation()});
    };

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.purpleBox, {opacity: animatedOpacity, transform: [{translateY: animatedTop}]}]} />
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
        backgroundColor: colors.primary,
        width: 150,
        height: 150,
    },
});
