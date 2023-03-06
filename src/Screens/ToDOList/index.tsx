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
	KeyboardAvoidingView
} from 'native-base'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import React from 'react'
import { ColorSwitch } from '../../components/ColorSwitch'
import { LogOutButton } from '../../components/LogOutButton'
import { ButtonProps } from '../../components/LogOutButton'

interface TaskProps {
	title: string
	isCompleted: boolean
}

interface ListProps extends ButtonProps {
	listName: string
	userName: string
}

export function ToDOList({ onClick, listName, userName }: ListProps) {
	const instState = Array<TaskProps>
	const [list, setList] = React.useState(instState)
	const [inputValue, setInputValue] = React.useState('')

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
				placement: 'bottom',
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
			height={'100%'}
			display='flex'
			alignItems={'center'}
		>
			<HStack
				safeArea
				w={'90%'}
				maxW={600}
				alignItems='center'
				justifyContent={'space-between'}
				position='fixed'
				space={2}
				top={0}
				borderBottomColor={'gray.400'}
				borderBottomWidth='1'
				paddingBottom={'4'}
			>
				<VStack>
					<Text>Welcome</Text>
					<Text fontWeight={'bold'}>{userName}!</Text>
				</VStack>

				<HStack
					alignItems='center'
					space={2}
				>
					<ColorSwitch />
					<LogOutButton onClick={onClick} />
				</HStack>
			</HStack>

			<VStack
				space={4}
				display='flex'
				h='100%'
			>
				<Box
					safeArea
					w={'80'}
				>
					<Heading
						size='md'
						fontWeight='600'
						color='coolGray.800'
						marginBottom={'2'}
						_dark={{
							color: 'warmGray.50'
						}}
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
							placeholder='Add Task'
							onSubmitEditing={() => {
								addItem(inputValue)
								setInputValue('')
							}}
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
						<IconButton
							borderRadius='sm'
							variant='solid'
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
					>
						{list.map((item, itemI) => (
							<HStack
								w='100%'
								justifyContent='space-between'
								alignItems='center'
								key={item.title + itemI.toString()}
							>
								<Checkbox
									isChecked={item.isCompleted}
									onChange={() => handleStatusChange(itemI)}
									value={item.title}
								></Checkbox>
								<Text
									width='100%'
									flexShrink={1}
									textAlign='left'
									mx='2'
									strikeThrough={item.isCompleted}
									_light={{
										color: item.isCompleted ? 'gray.400' : 'coolGray.800'
									}}
									_dark={{
										color: item.isCompleted ? 'gray.400' : 'coolGray.50'
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
											size='sm'
											color='trueGray.400'
										/>
									}
									onPress={() => handleDelete(itemI)}
								/>
							</HStack>
						))}
					</VStack>
					<Divider
						position={'fixed'}
						bottom={120}
						w='80'
					></Divider>
				</Box>
			</VStack>
		</KeyboardAvoidingView>
	)
}
