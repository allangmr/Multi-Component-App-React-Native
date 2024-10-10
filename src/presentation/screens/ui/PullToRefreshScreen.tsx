import { Title } from "../../components/ui/title";
import { RefreshControl, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useContext, useState } from "react";
import { globalStyles } from "../../../config/theme/theme";
import { ThemeContext } from "../../context/ThemeContext";

export const PullToRefreshScreen = () => {
    const [isRefreshing, setIsRefreshing] = useState(false);
    const { top } = useSafeAreaInsets();
    const {colors} = useContext(ThemeContext);

    const onRefresh = () => {
        setIsRefreshing(true);
        setTimeout(() => {
            setIsRefreshing(false);
        }, 2000);
    };

  return (
    <ScrollView
        refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} colors={[colors.primary, 'red', 'green']} progressViewOffset={top} />}
        style={[globalStyles.mainContainer, globalStyles.globalMargin, {backgroundColor: colors.background}]}
    >
        <Title text="Pull to refresh" safe />
    </ScrollView>
  );
};
