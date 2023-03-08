import React from 'react'
import { NativeBaseProvider, extendTheme, VStack, Text } from 'native-base'
import { Home } from './src/Screens/Home'
import {
	useFonts,
	Inter_900Black,
	Inter_400Regular,
	Inter_700Bold,
	Inter_800ExtraBold
} from '@expo-google-fonts/inter'
import { LoadingModal } from './src/components/LoadingModal'

// Define the config
const config = {
	useSystemColorMode: true,
	initialColorMode: 'auto'
}

const fontConfig = {
	Inter: {
		400: {
			normal: 'Inter_400Regular'
		},
		700: {
			normal: 'Inter_700Bold'
		},
		800: {
			normal: 'Inter_800ExtraBold'
		},
		900: {
			normal: 'Inter_900Black'
		}
	}
}

const fonts = {
	heading: 'Inter',
	body: 'Inter',
	mono: 'Inter'
}
// extend the theme
export const theme = extendTheme({ config, fontConfig, fonts })
type MyThemeType = typeof theme
declare module 'native-base' {
	interface ICustomTheme extends MyThemeType {}
}
export default function App() {
	let [fontsLoaded] = useFonts({
		Inter_900Black,
		Inter_400Regular,
		Inter_700Bold,
		Inter_800ExtraBold
	})

	if (!fontsLoaded) {
		return (
			<NativeBaseProvider theme={theme}>
				<LoadingModal font={'heading'}></LoadingModal>
			</NativeBaseProvider>
		)
	}
	return (
		<NativeBaseProvider theme={theme}>
			<VStack
				_dark={{ bg: 'blueGray.900' }}
				_light={{ bg: 'blueGray.50' }}
				flex={1}
				width='100%'
				height={'100%'}
				alignItems={'center'}
			>
				<Home font={'body'} />
			</VStack>
		</NativeBaseProvider>
	)
}
