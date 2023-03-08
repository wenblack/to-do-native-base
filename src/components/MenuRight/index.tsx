import { VStack, Menu, Button, useColorMode, StatusBar } from 'native-base'
import { useEffect, useState } from 'react'
import MenuIcon from 'react-native-vector-icons/Ionicons'
import { MenuItem } from '../MenuItem'

export function MenuRight() {
	const [shouldOverlapWithTrigger] = useState(false)
	const { colorMode, toggleColorMode } = useColorMode()

	useEffect(() => {}, [colorMode])

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
					<Menu.Item onPress={toggleColorMode}>
						<MenuItem
							iconName={colorMode === 'dark' ? 'sun' : 'moon'}
							title='Change  theme'
							color={colorMode === 'dark' ? 'white' : '#166534'}
							textColor={colorMode === 'dark' ? 'white' : '#166534'}
							borderSize={1}
						/>
					</Menu.Item>
					<Menu.Item>
						<MenuItem
							iconName='user'
							title='Edit your Name'
							color={colorMode === 'dark' ? 'white' : '#166534'}
							textColor={colorMode === 'dark' ? 'white' : '#166534'}
							borderSize={1}
						/>
					</Menu.Item>
					<Menu.Item>
						<MenuItem
							borderSize={1}
							iconName='edit'
							title='Rename List'
							color={colorMode === 'dark' ? 'white' : '#166534'}
							textColor={colorMode === 'dark' ? 'white' : '#166534'}
						/>
					</Menu.Item>
					<Menu.Item>
						<MenuItem
							borderSize={0}
							iconName='power'
							title='Log Out'
							color={colorMode === 'dark' ? 'white' : '#166534'}
							textColor={colorMode === 'dark' ? 'white' : '#166534'}
						/>
					</Menu.Item>
				</Menu>
			</VStack>
			<StatusBar
				barStyle={colorMode === 'dark' ? 'light-content' : 'dark-content'}
			></StatusBar>
		</>
	)
}
