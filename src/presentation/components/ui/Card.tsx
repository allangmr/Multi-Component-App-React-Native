import { StyleProp, ViewStyle } from "react-native";
import { View } from "react-native";
import { ReactNode, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";


interface Props {
    style?: StyleProp<ViewStyle>;
    children?: ReactNode;
}

export const Card = ({style, children}: Props) => {
  const {colors} = useContext(ThemeContext);
  return (
    <View style={[{backgroundColor: colors.cardBackground, borderRadius: 10, padding: 10}, style]}>
        {children}
    </View>
  );
};
