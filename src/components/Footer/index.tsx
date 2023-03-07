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
                color={'muted.700'}>Made with 💗 by Wender</Text>
            <HStack
                space={4}
                marginTop={2}
            >
                <IconButton
                    _light={{
                        background: 'trasparent'
                    }}
                    _dark={{
                        background: 'indigo.600'
                    }}
                    icon={
                        <MaterialIcons
                            name="linkedin"
                            size={30}
                            color={
                                colorMode === 'light' ? '#404040' : 'white'
                            }
                        />
                    }
                />
                <IconButton
                    _light={{ backgroundColor: 'transparent' }}
                    _dark={{
                        background: 'indigo.600'
                    }}
                    icon={
                        <MaterialIcons
                            name="github"
                            size={30}
                            color={
                                colorMode === 'light' ? '#404040' : 'white'
                            }
                        />
                    }
                />
                <IconButton
                    _light={{
                        background: 'transparent'
                    }}
                    _dark={{
                        background: 'indigo.600'
                    }}
                    icon={
                        <MaterialIcons
                            name="react"
                            size={30}
                            color={
                                colorMode === 'light' ? '#404040' : 'white'
                            }
                        />
                    }
                />
            </HStack>
        </Center>
    );
}