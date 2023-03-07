import { Center, HStack, IconButton, Text, useColorMode } from "native-base";
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'
export function Footer() {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Center
        >
            <Text
                marginTop={1}
                _dark={{ color: 'white' }}
                color={'muted.600'}>Made with 💗 by Wender</Text>
            <HStack
                space={4}
                marginTop={2}
            >
                <IconButton
                    background={'transparent'}
                    icon={
                        <MaterialIcons
                            name="linkedin"
                            size={30}
                            color={
                                colorMode === 'light' ? '#737373' : '#d4d4d4'
                            }
                        />
                    }
                />
                <IconButton
                    background={'transparent'}
                    icon={
                        <MaterialIcons
                            name="github"
                            size={30}
                            color={
                                colorMode === 'light' ? '#737373' : '#d4d4d4'
                            }
                        />
                    }
                />
                <IconButton
                    background={'transparent'}
                    icon={
                        <MaterialIcons
                            name="react"
                            size={30}
                            color={
                                colorMode === 'light' ? '#737373' : '#d4d4d4'
                            }
                        />
                    }
                />
            </HStack>
        </Center>
    );
}