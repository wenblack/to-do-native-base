import { HStack, Text } from "native-base";
import { ColorValue } from "react-native";
import Icon from 'react-native-vector-icons/Feather'

interface ItemProps {
    iconName: string
    title: string
    color: ColorValue
}

export function MenuItem({ iconName, title, color }: ItemProps) {
    return (
        <HStack
            flex={1} space={4}
            alignItems='center'
            textAlign={'justify'}
            justifyContent={'space-between'}
        >
            <Icon name={iconName} size={25} color={color} />
            <Text w={40}>{title}</Text>
        </HStack>
    );
}