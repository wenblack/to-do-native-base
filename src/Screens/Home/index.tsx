import {
	Button,
	Box,
	Heading,
	VStack,
	FormControl,
	Input,
	Text,
	HStack,
	Center,
	useColorMode,
	Toast
} from 'native-base'
import React, { useEffect, useState } from 'react'
import { ColorSwitch } from '../../components/ColorSwitch'
import Icon from 'react-native-vector-icons/AntDesign'
import Save from 'react-native-vector-icons/Feather'
import { ToDOList } from '../ToDOList'
import { ModalError } from '../../components/ModalError'

export function Home() {
	const { colorMode } = useColorMode()
	const [userName, setUserName] = useState('')
	const [listName, setListName] = useState('')
	const [userInformed, setUserInformed] = useState(false)

	function setName(e: any) {
		let name = e.target.value
		setUserName(name)
		console.log(userName)
	}
	function setList(e: any) {
		let name = e.target.value
		setListName(name)
		console.log(listName)
	}

	function validateData() {
		if (listName === '') {
			setTimeout(() => {
				Toast.closeAll()
			}, 1000)

			return Toast.show({
				placement: 'top',
				title: 'Something went wrong',
				_dark: {
					style: {
						display: 'flex',
						flexDirection: 'column',
						paddingHorizontal: 20,
						height: 80,
						alignItems: 'center',
						justifyContent: 'center',
						alignContent: 'center',
						backgroundColor: '#6066E5'
					}
				},
				description: 'Did you fill in both fields?',
				style: {
					display: 'flex',
					flexDirection: 'column',
					paddingHorizontal: 20,
					height: 80,
					alignItems: 'center',
					justifyContent: 'center',
					alignContent: 'center',
					backgroundColor: 'rgb(75, 85, 99)',
					marginTop: 15
				}
			})
		} else if (userName === '') {
			setTimeout(() => {
				Toast.closeAll()
			}, 1000)

			return Toast.show({
				placement: 'top',
				title: 'Something went wrong',
				description: 'Did you fill in both fields?',
				_dark: {
					style: {
						display: 'flex',
						flexDirection: 'column',
						paddingHorizontal: 20,
						height: 80,
						alignItems: 'center',
						justifyContent: 'center',
						alignContent: 'center',
						backgroundColor: '#6066E5'
					}
				},
				style: {
					display: 'flex',
					flexDirection: 'column',
					paddingHorizontal: 20,
					height: 80,
					alignItems: 'center',
					justifyContent: 'center',
					alignContent: 'center',
					backgroundColor: 'rgb(75, 85, 99)'
				}
			})
		} else {
			setUserInformed(true)
			Toast.show({
				placement: 'top',
				render: () => {
					return (
						<ModalError
							list={listName}
							user={userName}
						/>
					)
				}
			})
		}
	}

	function logOut() {
		setUserInformed(false)
		setListName('')
		setListName('')

		setTimeout(() => {
			Toast.closeAll()
		}, 1000)

		return Toast.show({
			placement: 'top',
			_dark: {
				style: {
					display: 'flex',
					flexDirection: 'column',
					paddingHorizontal: 20,
					padding: 20,
					alignItems: 'center',
					justifyContent: 'center',
					alignContent: 'center',
					backgroundColor: '#6066E5'
				}
			},
			description: 'User disconnected!',
			style: {
				display: 'flex',
				flexDirection: 'column',
				paddingHorizontal: 20,
				padding: 20,
				alignItems: 'center',
				justifyContent: 'center',
				alignContent: 'center',
				backgroundColor: '#0E7490',
				marginTop: 15
			}
		})
	}

	useEffect(() => {}, [userInformed])

	if (userInformed) {
		return (
			<ToDOList
				onClick={logOut}
				listName={listName}
				userName={userName}
			/>
		)
	}

	return (
		<>
			<HStack
				safeArea
				w={'100%'}
				maxW={'80%'}
				marginTop={'10'}
				alignItems='center'
				justifyContent={'flex-end'}
				marginBottom={10}
				position='fixed'
				top={0}
			>
				<ColorSwitch />
			</HStack>
			<Box
				safeArea
				p='2'
				py='8'
				w={'80'}
			>
				<Center>
					<Icon
						size={80}
						name='checksquare'
						style={{
							marginBottom: 10
						}}
						color={colorMode === 'light' ? '#15803D' : '#6066E5'}
					/>
					<Heading
						size='md'
						fontWeight='600'
						color='coolGray.800'
						_dark={{
							color: 'warmGray.50'
						}}
					>
						Simple TO-DO List
					</Heading>
				</Center>

				<VStack
					space={3}
					mt='5'
					width={'full'}
				>
					<FormControl>
						<FormControl.Label
							_text={{
								color: 'gray.800'
							}}
							_dark={{
								_text: {
									color: 'warmGray.200'
								}
							}}
						>
							List Name:
						</FormControl.Label>
						<Input
							placeholder='Work tasks'
							onChange={setList}
							shadow={'2'}
							_light={{
								_focus: {
									borderColor: 'green.500',
									shadow: '0',
									borderWidth: '1'
								}
							}}
							_dark={{
								borderColor: 'warmGray.300',
								placeholderTextColor: '#737373',
								color: 'white'
							}}
						/>
					</FormControl>

					<FormControl>
						<FormControl.Label
							_text={{
								color: 'gray.800'
							}}
							_dark={{
								_text: {
									color: 'warmGray.200'
								}
							}}
						>
							Your Name:
						</FormControl.Label>
						<Input
							placeholder='John Doe'
							shadow={'2'}
							onChange={setName}
							_light={{
								_focus: {
									borderColor: 'green.500',
									shadow: '0',
									borderWidth: '1'
								}
							}}
							_dark={{
								borderColor: 'warmGray.300',
								placeholderTextColor: '#737373',
								color: 'white'
							}}
						/>
					</FormControl>

					<Button
						mt='8'
						colorScheme='green'
						_dark={{
							bg: 'indigo.600'
						}}
						shadow={'2'}
						onPress={validateData}
					>
						<HStack
							alignItems={'center'}
							justifyContent={'space-between'}
							space={5}
						>
							<Text
								fontSize={'lg'}
								color={'white'}
							>
								Save List
							</Text>
							<Save
								name='save'
								size={20}
								color={'white'}
							/>
						</HStack>
					</Button>
				</VStack>
			</Box>
		</>
	)
}
