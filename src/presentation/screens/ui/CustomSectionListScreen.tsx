import { SectionList, Text, useWindowDimensions } from "react-native";
import { Card } from "../../components/ui/Card";
import { CustomView } from "../../components/ui/CustomView";
import { Title } from "../../components/ui/title";
import { houses } from "../../../mocks/houses";
import { SubTitle } from "../../components/ui/Subtitle";
import { Separator } from "../../components/ui/Separator";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const CustomSectionListScreen = () => {
    const {height} = useWindowDimensions();
    const {top} = useSafeAreaInsets();
    const {colors} = useContext(ThemeContext);
  return (
    <CustomView>
        <Title text="Custom Section List" />
        <Card>
            <SectionList
                sections={houses}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Text style={{marginVertical: 12}}>{item}</Text>}
                showsVerticalScrollIndicator={false}
                renderSectionHeader={({section}) => <SubTitle backgroundColor={colors.cardBackground} text={section.title} />}
                stickySectionHeadersEnabled
                SectionSeparatorComponent={() => <Separator />}
                ListHeaderComponent={() => <Title text="Characters" />}
                ListFooterComponent={() => <Title text="End of List" />}
                style={{height: height - top - 80}}
            />
        </Card>
    </CustomView>
  );
};
