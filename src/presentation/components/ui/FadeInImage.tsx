import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from "react-native";
import { useContext, useState } from "react";
import { useAnimation } from "../../hooks/useAnimation";
import { ThemeContext } from "../../context/ThemeContext";

interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({uri, style}: Props) => {
    const { animatedOpacity, fadeIn } = useAnimation();
    const [isLoading, setIsLoading] = useState(true);
    const {colors} = useContext(ThemeContext);
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
        {isLoading && <ActivityIndicator style={{ position: 'absolute'}} size={30} color={colors.primary} />}
        <Animated.Image source={{uri}} style={[style, {opacity: animatedOpacity}]} onLoadEnd={() => {
            fadeIn({});
            setIsLoading(false);
        }} />
    </View>
  );
};
