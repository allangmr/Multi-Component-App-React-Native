import { StyleProp, View, ViewStyle } from "react-native";
import { MenuItem } from "./MenuItem";
import { Separator } from "./Separator";

interface Props {
    items: Items[];
    style?: StyleProp<ViewStyle>;
}

interface Items {
    name: string;
    icon: string;
    component: string;
}

export const MenuSection = ({items, style}: Props) => {
    return (
        <View style={{marginVertical: 10}}>
          {items.map((item, index) => {
            const isFirst = index === 0;
            const isLast = index === items.length - 1;
            return (
              <View
                key={item.component}
                style={[
                  { backgroundColor: 'white',},
                  isFirst && { borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingTop: 10 },
                  isLast && { borderBottomLeftRadius: 10, borderBottomRightRadius: 10, paddingBottom: 10 },
                  style,
                ]}
              >
                <MenuItem {...item} isFirst={isFirst} isLast={isLast} />
                {!isLast && <Separator style={{ marginVertical: 5, marginHorizontal: 10 }} />}
              </View>
            );
          })}
        </View>
      );
};
