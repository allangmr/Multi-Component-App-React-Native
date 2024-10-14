import { Modal, Platform, View } from "react-native";
import { CustomView } from "../../components/ui/CustomView";
import { Title } from "../../components/ui/title";
import { Button } from "../../components/ui/Button";
import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const ModalScreen = () => {
    const [isVisible, setIsVisible] = useState(false);
    const {colors} = useContext(ThemeContext);
  return (
    <CustomView>
        <Title text="Modal" safe/>
        <Button text="Open Modal" onPress={() => setIsVisible(true)} />
        <Modal
            visible={isVisible}
            animationType="slide"
        >
            <View style={{flex: 1, backgroundColor: colors.background}}>
                <View style={{paddingHorizontal: 10}}>
                    <Title text="Modal Content" safe/>
                </View>
                <View style={{flex: 1}} />
                <Button
                    text="Close Modal"
                    onPress={() => setIsVisible(false)}
                    styles={{height: Platform.OS === 'ios' ? 60 : 40}}
                />
            </View>
        </Modal>
    </CustomView>
  );
};
