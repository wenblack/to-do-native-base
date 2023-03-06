import { VStack, Menu, Button, useColorMode, StatusBar } from 'native-base'
import { useEffect, useState } from 'react'
import MenuIcon from 'react-native-vector-icons/Ionicons'
import { MenuItem } from '../MenuItem'



export function MenuRight() {
	const [shouldOverlapWithTrigger] = useState(false)
	const { colorMode, toggleColorMode } = useColorMode()

	useEffect(() => { }, [colorMode])

	return (
		<>
			<VStack
				space={6}
			>
				<Menu
					w='200'
					rounded={'lg'}
					shouldOverlapWithTrigger={shouldOverlapWithTrigger} // @ts-ignore
					placement={'bottom right'}
					backgroundColor={'gray.100'}
					_dark={{
						backgroundColor: 'blueGray.700'
					}}
					trigger={(triggerProps) => {
						return (
							<Button
								alignSelf='center'
								variant='unstyled'
								colorScheme={'blue'}
								{...triggerProps}
							>
								<MenuIcon
									name='menu'
									size={25}
									color={
										colorMode === 'dark' ? 'white' : 'black'
									}
								/>
							</Button>
						)
					}}
				>
					<Menu.Item
						onPress={toggleColorMode}
					>
						<MenuItem
							iconName={
								colorMode === 'dark' ? 'sun' : 'moon'
							}
							title='Change  theme'
							color={
								colorMode === 'dark' ? 'white' : 'rgb(75, 85, 99)'
							}
						/>
					</Menu.Item>
					<Menu.Item >
						<MenuItem
							iconName='user'
							title='Edit your Name'
							color={
								colorMode === 'dark' ? 'white' : 'rgb(75, 85, 99)'
							}
						/>
					</Menu.Item>
					<Menu.Item>
						<MenuItem
							iconName='edit'
							title='Rename List'
							color={
								colorMode === 'dark' ? 'white' : 'rgb(75, 85, 99)'
							}
						/>
					</Menu.Item>
					<Menu.Item>
						<MenuItem
							iconName='power'
							title='Log Out'
							color={
								colorMode === 'dark' ? 'white' : 'rgb(75, 85, 99)'
							}
						/>
					</Menu.Item>

				</Menu>
			</VStack >
			<StatusBar
				translucent
				barStyle={colorMode === 'dark' ? 'light-content' : 'dark-content'}
			></StatusBar>
		</>
	)
}
