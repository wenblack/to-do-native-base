import React, { useEffect } from 'react'
import { Center, NativeBaseProvider, extendTheme, VStack } from 'native-base'
import { Home } from './src/Screens/Home'

// Define the config
const config = {
	useSystemColorMode: false
}

// extend the theme
export const theme = extendTheme({ config })
type MyThemeType = typeof theme
declare module 'native-base' {
	interface ICustomTheme extends MyThemeType { }
}
export default function App() {
	return (
		<NativeBaseProvider>
			<VStack
				_dark={{ bg: 'blueGray.900' }}
				_light={{ bg: 'blueGray.50' }}
				flex={1}
				width='100%'
				height={'100%'}
				safeArea
				alignItems={'center'}
			>
				<Home></Home>
			</VStack>
		</NativeBaseProvider>
	)
}
