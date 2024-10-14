import { StyleProp, View, ViewStyle } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

interface Props {
    style?: StyleProp<ViewStyle>;
}

export const Separator = ({style}: Props) => {
  const {colors} = useContext(ThemeContext);
  return (
    <View style={[{marginVertical: 10, height: 1, backgroundColor: colors.separator}, style]} />
  );
};
