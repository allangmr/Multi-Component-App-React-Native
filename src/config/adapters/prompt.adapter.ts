import prompt from "react-native-prompt-android";

interface Options {
    message: string;
    description?: string;
    buttons: Button[];
    prompType?: 'plain-text' | 'secure-text' | 'login-password' | 'default';
    cancelable?: boolean;
    defaultValue?: string;
    placeholder?: string;
}

interface Button {
    text: string;
    onPress: () => void;
    style?: 'cancel' | 'destructive' | 'default';
}

export const showPrompt = ({message, description, buttons, prompType = 'default', cancelable = false, defaultValue = 'example defaultValue', placeholder = 'example placeholder'}: Options) => {
    prompt(
        message,
        description,
        buttons,
        {
            type: prompType,
            cancelable: cancelable,
            defaultValue: defaultValue,
            placeholder: placeholder,
        }
    );
};
