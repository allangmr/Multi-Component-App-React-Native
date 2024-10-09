import { Title } from "../../components/ui/title";
import { RefreshControl, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import { colors, globalStyles } from "../../../config/theme/theme";

export const PullToRefreshScreen = () => {
    const [isRefreshing, setIsRefreshing] = useState(false);
    const { top } = useSafeAreaInsets();

    const onRefresh = () => {
        setIsRefreshing(true);
        setTimeout(() => {
            setIsRefreshing(false);
        }, 2000);
    };

  return (
    <ScrollView
        refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} colors={[colors.primary, 'red', 'green']} progressViewOffset={top} />}
        style={[globalStyles.mainContainer, globalStyles.globalMargin]}
    >
        <Title text="Pull to refresh" safe />
    </ScrollView>
  );
};
