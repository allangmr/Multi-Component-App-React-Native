import { Button } from "../../components/ui/Button";
import { CustomView } from "../../components/ui/CustomView";
import { Title } from "../../components/ui/title";
import { Separator } from "../../components/ui/Separator";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const ChangeThemeScreen = () => {
  const { setTheme, currentTheme } = useContext(ThemeContext);
  return (
    <CustomView>
        <Title text={`Change Theme: ${currentTheme}`} safe />
        <Button text='Light' onPress={() => setTheme('light')} />
        <Separator />
        <Button text='Dark' onPress={() => setTheme('dark')} />
    </CustomView>
  );
};
