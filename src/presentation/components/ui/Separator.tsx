import { StyleProp, View, ViewStyle } from "react-native";
import { colors } from "../../../config/theme/theme";

interface Props {
    style?: StyleProp<ViewStyle>;
}

export const Separator = ({style}: Props) => {
  return (
    <View style={[{marginVertical: 10, height: 1, backgroundColor: colors.separator}, style]} />
  );
};
