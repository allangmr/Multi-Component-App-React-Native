import { Modal, Platform, View } from "react-native";
import { CustomView } from "../../components/ui/CustomView";
import { Title } from "../../components/ui/title";
import { Button } from "../../components/ui/Button";
import { useState } from "react";

export const ModalScreen = () => {
    const [isVisible, setIsVisible] = useState(false);
  return (
    <CustomView>
        <Title text="Modal" safe/>
        <Button text="Open Modal" onPress={() => setIsVisible(true)} />
        <Modal
            visible={isVisible}
            animationType="slide"
        >
            <View style={{flex: 1, backgroundColor: "rgba(0,0,0,0.1)"}}>
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
