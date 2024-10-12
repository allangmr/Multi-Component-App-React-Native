import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from "react-native";
import { colors } from "../../../config/theme/theme";
import { useState } from "react";
import { useAnimation } from "../../hooks/useAnimation";

interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({uri, style}: Props) => {
    const { animatedOpacity, fadeIn } = useAnimation();
    const [isLoading, setIsLoading] = useState(true);
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
