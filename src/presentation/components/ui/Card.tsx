import { StyleProp, ViewStyle } from "react-native";
import { View } from "react-native";
import { colors } from "../../../config/theme/theme";
import { ReactNode } from "react";


interface Props {
    style?: StyleProp<ViewStyle>;
    children?: ReactNode;
}

export const Card = ({style, children}: Props) => {
  return (
    <View style={[{backgroundColor: colors.cardBackground, borderRadius: 10, padding: 10}, style]}>
        {children}
    </View>
  );
};
