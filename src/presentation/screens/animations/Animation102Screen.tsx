import { useContext, useRef } from "react";
import { Animated, PanResponder, StyleSheet, View } from "react-native";
import { ThemeContext } from "../../context/ThemeContext";

export const Animation102Screen = () => {
    const pan = useRef(new Animated.ValueXY()).current;
    const {colors} = useContext(ThemeContext);
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event(
            [
              null,
              {
                dx: pan.x, // x,y are Animated.Value
                dy: pan.y,
              },
            ],
            { useNativeDriver: false } // Add this line
          ),
        onPanResponderRelease: () => {
          Animated.spring(
            pan, // Auto-multiplexed
            {toValue: {x: 0, y: 0}, useNativeDriver: false}, // Back to zero
          ).start();
        },
      });
      return (
        <View style={[styles.container, {backgroundColor: colors.background}]}>
          <Animated.View
            {...panResponder.panHandlers}
            style={[pan.getLayout(), styles.box, {backgroundColor: colors.primary}]}
          />
        </View>
      );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        width: 100,
        height: 100,
        borderRadius: 4,
    },
  });
