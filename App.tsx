import React from 'react'
import { Center, NativeBaseProvider, extendTheme, VStack } from 'native-base'
import { Home } from './src/Screens/Home'

// Define the config
const config = {
	useSystemColorMode: false,
	initialColorMode: 'auto'
}

// extend the theme
export const theme = extendTheme({ config })
type MyThemeType = typeof theme
declare module 'native-base' {
	interface ICustomTheme extends MyThemeType {}
}
export default function App() {
	return (
		<NativeBaseProvider>
			<Center
				_dark={{ bg: 'blueGray.900' }}
				_light={{ bg: 'blueGray.50' }}
				px={4}
				flex={1}
				width='100%'
				safeArea
			>
				<VStack
					space={5}
					alignItems='center'
				>
					<Home></Home>
				</VStack>
			</Center>
		</NativeBaseProvider>
	)
}
