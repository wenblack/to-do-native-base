import { useColorMode, HStack, Switch, Button } from "native-base";
import { GestureResponderEvent } from "react-native";
import Icon from 'react-native-vector-icons/Feather'

export interface ButtonProps {
    onClick: (e: GestureResponderEvent) => void
}


// Color Switch Component
export function LogOutButton({ onClick }: ButtonProps) {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Button
            bg='transparent'
            onPress={onClick}
            borderWidth='0'
            rounded={'full'}
            style={{
                backgroundColor: 'transparent',
            }}
            variant='outline'
            _light={
                {
                    _focus: {
                        borderColor: 'green.500',

                    },
                }
            }
        >

            <HStack
                space={2}
                alignItems="center"
                justifyContent='center'
            >
                <Icon
                    color={
                        colorMode === "light" ? "rgb(75, 85, 99)" : "white"
                    } name={'power'} size={25}>

                </Icon>
            </HStack>
        </Button>
    );
}
