import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput } from "react-native";
import { Card } from "../../components/ui/Card";
import { CustomView } from "../../components/ui/CustomView";
import { Title } from "../../components/ui/title";
import { globalStyles } from "../../../config/theme/theme";
import { useState } from "react";
import { Separator } from "../../components/ui/Separator";

export const TextInputScreen = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
    });

    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <ScrollView>
                <CustomView margin>
                    <Title text="Text Inputs" safe />
                    <Card>
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Enter your name"
                            autoCapitalize={'words'}
                            autoCorrect={false}
                            onChangeText={(value) => setForm({...form, name: value})}
                        />
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Enter your email"
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            keyboardType="email-address"
                            onChangeText={(value) => setForm({...form, email: value})}
                        />
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Enter your phone"
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            keyboardType="phone-pad"
                            onChangeText={(value) => setForm({...form, phone: value})}
                        />
                    </Card>

                    <Separator />

                    <Card>
                        <Text>{JSON.stringify(form, null, 2)}</Text>
                        <Text>{JSON.stringify(form, null, 2)}</Text>
                        <Text>{JSON.stringify(form, null, 2)}</Text>
                        <Text>{JSON.stringify(form, null, 2)}</Text>
                        <Text>{JSON.stringify(form, null, 2)}</Text>
                        <Text>{JSON.stringify(form, null, 2)}</Text>
                        <Text>{JSON.stringify(form, null, 2)}</Text>
                        <Text>{JSON.stringify(form, null, 2)}</Text>
                    </Card>
                </CustomView>
                <Separator style={{marginVertical: 10, backgroundColor: 'transparent'}} />
            </ScrollView>
        </KeyboardAvoidingView>
    );
};
