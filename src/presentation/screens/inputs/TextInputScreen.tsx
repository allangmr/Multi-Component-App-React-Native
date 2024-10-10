import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput } from "react-native";
import { Card } from "../../components/ui/Card";
import { CustomView } from "../../components/ui/CustomView";
import { Title } from "../../components/ui/title";
import { globalStyles } from "../../../config/theme/theme";
import { useContext, useState } from "react";
import { Separator } from "../../components/ui/Separator";
import { ThemeContext } from "../../context/ThemeContext";

export const TextInputScreen = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
    });
    const {colors} = useContext(ThemeContext);

    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <ScrollView>
                <CustomView  style={{paddingBottom: 10}} margin>
                    <Title text="Text Inputs" safe />
                    <Card>
                        <TextInput
                            style={[globalStyles.input, {borderColor: colors.inputBorderColor, color: colors.inputColor, backgroundColor: colors.background}]}
                            placeholder="Enter your name"
                            autoCapitalize={'words'}
                            autoCorrect={false}
                            onChangeText={(value) => setForm({...form, name: value})}
                        />
                        <TextInput
                            style={[globalStyles.input, {borderColor: colors.inputBorderColor, color: colors.inputColor, backgroundColor: colors.background}]}
                            placeholder="Enter your email"
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            keyboardType="email-address"
                            onChangeText={(value) => setForm({...form, email: value})}
                        />
                        <TextInput
                            style={[globalStyles.input, {borderColor: colors.inputBorderColor, color: colors.inputColor, backgroundColor: colors.background}]}
                            placeholder="Enter your phone"
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            keyboardType="phone-pad"
                            onChangeText={(value) => setForm({...form, phone: value})}
                        />
                    </Card>

                    <Separator />

                    <Card>
                        <Text style={{color: colors.text}}>{JSON.stringify(form, null, 2)}</Text>
                        <Text style={{color: colors.text}}>{JSON.stringify(form, null, 2)}</Text>
                        <Text style={{color: colors.text}}>{JSON.stringify(form, null, 2)}</Text>
                        <Text style={{color: colors.text}}>{JSON.stringify(form, null, 2)}</Text>
                        <Text style={{color: colors.text}}>{JSON.stringify(form, null, 2)}</Text>
                        <Text style={{color: colors.text}}>{JSON.stringify(form, null, 2)}</Text>
                        <Text style={{color: colors.text}}>{JSON.stringify(form, null, 2)}</Text>
                        <Text style={{color: colors.text}}>{JSON.stringify(form, null, 2)}</Text>
                    </Card>
                </CustomView>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};
