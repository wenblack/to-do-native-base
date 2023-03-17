import { VStack, Menu, Button, useColorMode, StatusBar } from 'native-base'
import { useEffect, useState } from 'react'
import { GestureResponderEvent } from 'react-native'
import MenuIcon from 'react-native-vector-icons/Ionicons'
import { MenuItem } from '../MenuItem'

export interface MenuItemProps {
	editNameFunction: (event: GestureResponderEvent) => void
	editListFunction: (event: GestureResponderEvent) => void
	logOutFunction: (event: GestureResponderEvent) => void
	name?: string
}

export function MenuRight({ editNameFunction, editListFunction, logOutFunction, name }: MenuItemProps) {
	const [shouldOverlapWithTrigger] = useState(false)
	const { colorMode, toggleColorMode } = useColorMode()

	useEffect(() => { }, [colorMode])

	return (
		<>
			<VStack space={6}>
				<Menu
					w='200'
					rounded={'lg'}
					marginTop={4}
					shouldOverlapWithTrigger={shouldOverlapWithTrigger} // @ts-ignore
					placement={'bottom right'}
					backgroundColor={'warmGray.50'}
					_dark={{
						backgroundColor: 'blueGray.600'
					}}
					trigger={(triggerProps) => {
						return (
							<Button
								alignSelf='center'
								variant='unstyled'
								{...triggerProps}
							>
								<MenuIcon
									name='menu'
									size={25}
									color={'white'}
								/>
							</Button>
						)
					}}
				>
					<Menu.Group
						title={'Welcome ' + name + '!'}
						_title={{
							fontFamily: 'Inter_800ExtraBold',
							textAlign: 'center',
							alignSelf: 'flex-end',
							_light: {
								color: 'success.900'
							},
							_dark: {
								color: 'warmGray.200'
							}
						}}
					>
						<Menu.Item onPress={toggleColorMode}>
							<MenuItem
								iconName={colorMode === 'dark' ? 'sun' : 'moon'}
								title='Change  theme'
								color={colorMode === 'dark' ? 'white' : '#166534'}
								textColor={colorMode === 'dark' ? 'white' : '#166534'}
								borderSize={1}
								font='Inter_500Medium'
							/>
						</Menu.Item>
						<Menu.Item onPress={logOutFunction}>
							<MenuItem
								borderSize={0}
								iconName='power'
								title='Log Out'
								font='Inter_500Medium'
								color={colorMode === 'dark' ? 'white' : '#166534'}
								textColor={colorMode === 'dark' ? 'white' : '#166534'}
							/>
						</Menu.Item>
					</Menu.Group>
				</Menu>
			</VStack>
			<StatusBar
				barStyle={colorMode === 'dark' ? 'light-content' : 'dark-content'}
			></StatusBar>
		</>
	)
}
