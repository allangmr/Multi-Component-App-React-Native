import { useState } from "react";
import { ActivityIndicator, FlatList, View} from "react-native";
import { colors } from "../../../config/theme/theme";
import { FadeInImage } from "../../components/ui/FadeInImage";

export const InfiniteScrollScreen = () => {
    const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

    const loadMore = () => {
        const newArray = Array.from({ length: 9 }, (_, i) => i + numbers.length);
        setTimeout(() => {
            setNumbers([...numbers, ...newArray]);
        }, 3000);
    };
    return (
        <View style={{backgroundColor: 'black'}}>
            <FlatList
                data={numbers}
                onEndReached={loadMore}
                onEndReachedThreshold={0.6}
                keyExtractor={(item) => item.toString()}
                renderItem={({ item }) => <ListItem item={item} />}
                ListFooterComponent={() => (
                    <View style={{height: 150, justifyContent: 'center'}}>
                        <ActivityIndicator size={40} color={colors.primary} />
                    </View>
                )}
            />
        </View>
    );
};

interface ListItemProps {
    item: number;
}

const ListItem = ({ item }: ListItemProps) => {
    return (
        <FadeInImage
            uri={`https://picsum.photos/id/${item}/500/400`}
            style={{width: '100%', height: 400}}
        />
    );
};
