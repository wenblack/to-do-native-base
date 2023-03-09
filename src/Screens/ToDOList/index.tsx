import {
	Box,
	Heading,
	VStack,
	HStack,
	Input,
	IconButton,
	Icon,
	Checkbox,
	Text,
	Toast,
	Divider,
	KeyboardAvoidingView,
	Center,
	useColorMode
} from 'native-base'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import React from 'react'
import { ButtonProps } from '../../components/LogOutButton'
import { MenuRight } from '../../components/MenuRight'
import Logo from 'react-native-vector-icons/AntDesign'
import { MenuItemProps } from '../../components/MenuRight'

interface TaskProps {
	title: string
	isCompleted: boolean
}

interface ListProps extends ButtonProps, MenuItemProps {
	listName: string
	userName: string
}

export function ToDOList({ onClick, listName, userName, editListFunction, editNameFunction, logOutFunction }: ListProps) {
	const instState = Array<TaskProps>
	const [list, setList] = React.useState(instState)
	const [inputValue, setInputValue] = React.useState('')
	const { colorMode, toggleColorMode } = useColorMode()

	const addItem = (title: string) => {
		if (title === '') {
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
				description: 'Please fill the field',
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
		} else if (list.length === 9) {
			setTimeout(() => {
				Toast.closeAll()
			}, 2000)

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
				title: 'Please remove tasks',
				description: 'You already have many tasks',
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

		setList((prevList) => {
			return [
				...prevList,
				{
					title: title,
					isCompleted: false
				}
			]
		})
	}

	const handleDelete = (index: number) => {
		setList((prevList) => {
			const temp = prevList.filter((_, itemI) => itemI !== index)
			return temp
		})
	}

	const handleStatusChange = (index: number) => {
		setList((prevList) => {
			const newList = [...prevList]
			newList[index].isCompleted = !newList[index].isCompleted
			return newList
		})
	}

	return (
		<KeyboardAvoidingView
			h={'100%'}
			w={'100%'}
			height={'full'}
			width={'full'}
			display='flex'
			flex={1}
			alignItems={'center'}
			_web={{
				marginTop: '24'
			}}
		>
			<HStack
				width={'full'}
				w={'100%'}
				alignItems='center'
				flexDirection={'row'}
				justifyContent={'center'}
				display='flex'
				position='fixed'
				space={2}
				top={0}
				p={4}
				background={'green.700'}
				_dark={{
					bg: 'blueGray.700'
				}}
			>
				<Center
					width={'100%'}
					maxW={'800'}
					flexDirection='row'
					justifyContent={'space-between'}
				>
					<HStack space={2}>
						<Text
							color={colorMode === 'light' ? 'white' : '#22d3ee'}
							fontWeight={'bold'}
							fontSize={'lg'}
							fontFamily='Inter_800ExtraBold'
						>
							TO-DO
						</Text>
						<Logo
							size={25}
							name='checksquare'
							color={colorMode === 'light' ? 'white' : '#22d3ee'}
						/>
					</HStack>

					<MenuRight
						editNameFunction={editNameFunction}
						logOutFunction={logOutFunction}
						editListFunction={editListFunction}
					></MenuRight>
				</Center>
			</HStack>

			<VStack
				safeArea
				space={4}
				display='flex'
			>
				<Box w={'80'}>
					<Heading
						size='md'
						fontWeight='800'
						fontFamily={'Inter_800ExtraBold'}
						color='green.800'
						marginBottom={'2'}
						_dark={{
							color: 'warmGray.50'
						}}
						textTransform={'uppercase'}
					>
						{listName}
					</Heading>
					<HStack
						space={2}
						marginBottom={2}
						alignItems='center'
					>
						<Input
							flex={1}
							onChangeText={(v) => setInputValue(v)}
							value={inputValue}
							fontSize='md'
							placeholder='Add Task'
							onSubmitEditing={() => {
								addItem(inputValue)
								setInputValue('')
							}}
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
						<IconButton
							borderRadius='sm'
							variant='solid'
							background={'green.700'}
							_dark={{
								bg: 'blueGray.600'
							}}
							icon={
								<Icon
									as={Feather}
									name='plus'
									size='sm'
									color='warmGray.50'
								/>
							}
							onPress={() => {
								addItem(inputValue)
								setInputValue('')
							}}
						/>
					</HStack>
					<VStack
						alignItems='center'
						height={'full'}
						px={2}
						mt={5}
					>
						{list.map((item, itemI) => (
							<HStack
								w='100%'
								justifyContent='space-between'
								alignItems='center'
								key={item.title + itemI.toString()}
								borderColor={item.isCompleted ? 'green.500' : 'red.500'}
								_light={{
									bg: item.isCompleted ? 'green.100' : 'red.100'
								}}

								rounded={'lg'}
								_dark={{
									bg: 'transparent',
									borderColor: item.isCompleted ? 'primary.400' : 'warmGray.300'
								}}

								borderWidth='2'
								px='2'
								py={2}
								marginBottom={1}
							>
								<Checkbox
									isChecked={item.isCompleted}
									_dark={{
										borderColor: item.isCompleted ? 'red.400' : 'warmGray.300',
										backgroundColor: item.isCompleted ? 'primary.400' : 'transparent'
									}}
									borderColor={item.isCompleted ? 'green.500' : 'red.500'}
									_light={{
										background: item.isCompleted ? 'green.500' : 'transparent'
									}}
									onChange={() => handleStatusChange(itemI)}
									value={item.title}
									ml={2}
								></Checkbox>
								<Text
									width='100%'
									flexShrink={1}
									textAlign='left'
									mx='2'
									fontWeight={'700'}
									fontSize='md'
									strikeThrough={item.isCompleted}
									_light={{
										color: item.isCompleted ? 'green.500' : 'red.500'
									}}
									_dark={{
										color: item.isCompleted ? 'primary.400' : 'warmGray.300'
									}}
									onPress={() => handleStatusChange(itemI)}
								>
									{item.title}
								</Text>
								<IconButton
									size='sm'
									colorScheme='trueGray'
									icon={
										<Icon
											as={Entypo}
											name='trash'
											size='md'
											_dark={{
												color: item.isCompleted ? 'primary.400' : 'warmGray.300'
											}}
											color={item.isCompleted ? 'green.500' : 'red.500'}
										/>
									}
									onPress={() => handleDelete(itemI)}
								/>
							</HStack>
						))}
					</VStack>
				</Box>
			</VStack>
		</KeyboardAvoidingView>
	)
}
