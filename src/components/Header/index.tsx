import { HStack, IconButton, StatusBar, Text } from "native-base";
import React from "react";

import { ColorSwitch } from "../ColorSwitch";

export function Header() {
    return (
        <HStack
            bg="transparent"
            px="1"
            py="3"
            justifyContent="space-between"
            alignItems="center"
            width={'full'}
            position={'fixed'}
            top='0'
        >
            <Text>Teste de Texto</Text>
            <ColorSwitch />
        </HStack>
    )
}
