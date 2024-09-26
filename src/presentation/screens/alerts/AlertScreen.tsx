import { Alert } from "react-native";
import { Button } from "../../components/ui/Button";
import { CustomView } from "../../components/ui/CustomView";
import { Separator } from "../../components/ui/Separator";
import { Title } from "../../components/ui/title";

export const AlertScreen = () => {
    const createTwoButtonAlert = () => {
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'destructive',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
    };
    const createThreeButtonAlert = () => {
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
              text: 'Ask me later',
              onPress: () => console.log('Ask me later pressed'),
            },
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],  {cancelable: true, onDismiss: () => console.log('onDismiss')});
    };
    return (
        <CustomView>
            <Title safe text="Alerts" />
            <Button text="Show Alert - 2 Button" onPress={createTwoButtonAlert} />
            <Separator style={{marginVertical: 20}} />
            <Button text="Show Alert - 3 Buttons" onPress={createThreeButtonAlert} />
            <Separator style={{marginVertical: 20}} />
            <Button text="Prompt - Input" onPress={createThreeButtonAlert} />
        </CustomView>
    );
};
