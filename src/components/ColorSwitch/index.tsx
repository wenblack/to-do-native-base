import { useColorMode, HStack, Switch, Button, StatusBar } from 'native-base'
import Icon from 'react-native-vector-icons/Feather'

// Color Switch Component
export function ColorSwitch() {
	const { colorMode, toggleColorMode } = useColorMode()
	return (
		<>
			<Button
				bg='transparent'
				onPress={toggleColorMode}
				style={{
					backgroundColor: 'transparent'
				}}
				variant='outline'
				_light={{
					_focus: {
						borderColor: 'green.500'
					}
				}}
			>
				<HStack
					space={2}
					alignItems='center'
					justifyContent='center'
				>
					<Icon
						color={colorMode === 'light' ? 'rgb(75, 85, 99)' : 'white'}
						name={'sun'}
						size={25}
					></Icon>
					<Switch
						isChecked={colorMode === 'dark'}
						onToggle={toggleColorMode}
						colorScheme='blueGray'
						aria-label={
							colorMode === 'light'
								? 'switch to dark mode'
								: 'switch to light mode'
						}
					/>
					<Icon
						color={colorMode === 'light' ? '#4338CA' : '#6066E5'}
						name={'moon'}
						size={25}
					></Icon>
				</HStack>
			</Button>
			<StatusBar
				translucent
				barStyle={colorMode === 'dark' ? 'light-content' : 'dark-content'}
			></StatusBar>
		</>
	)
}
