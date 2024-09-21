import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    name: string;
    size?: number;
    color?: string;
    style?: any;
}

export const IonIcon = ({name, size = 20, color = 'black', style}: Props) => {
  return (
    <Icon name={name} size={size} color={color} style={style} />
  );
};
