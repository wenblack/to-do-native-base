import { Center, Progress, HStack, IconButton, Text, useColorMode, VStack, Alert, Box } from 'native-base'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'

interface boxProps {
	total: number
	completed: number
	type?: 'info' | 'warning' | 'success' | 'error' | (string & {});
}


export function StatusBar({ total, completed, type }: boxProps) {
	const { colorMode, toggleColorMode } = useColorMode()

	if (type === 'error') {
		return (
			<Center>
				<VStack space={5} maxW="400" w={80}>
					<Alert
						w="100%"
						status="error"
						_dark={{
							bg: 'transparent',
							borderColor: 'red.500',
							borderWidth: '1'
						}}
						_light={{
							borderColor: 'red.500',
							borderWidth: '1'
						}}

					>
						<VStack space={1} flexShrink={1} w="100%" alignItems="center">

							<Alert.Icon size="md" />
							<Text fontSize="md" fontWeight="medium"
								_dark={{
									color: 'warmGray.50'
								}}
								_light={{
									color: 'red.700'
								}}
							>
								Let's get started
							</Text>

							<Box
								flexDirection='row'
								_text={{
									textAlign: "center"
								}} >
								<Text _dark={{
									color: 'red.500'
								}}
									_light={{
										color: 'red.700'
									}}>
									Complete {completed}/{total} tasks
								</Text>
							</Box>
						</VStack>
					</Alert>
				</VStack>
			</Center>
		)
	} else if (type === 'warning') {
		return (
			<Center>
				<VStack space={5} maxW="400" w={80}>
					<Alert
						w="100%"
						status="warning"
						_dark={{
							bg: 'transparent',
							borderColor: 'yellow.500',
							borderWidth: '1'
						}}
						_light={{
							borderColor: 'yellow.500',
							borderWidth: '1'
						}}

					>
						<VStack space={1} flexShrink={1} w="100%" alignItems="center">

							<Alert.Icon size="md" />
							<Text fontSize="md" fontWeight="medium"
								_dark={{
									color: 'warmGray.50'
								}}
								_light={{
									color: 'yellow.700'
								}}
							>
								Let's get started
							</Text>

							<Box
								flexDirection='row'
								_text={{
									textAlign: "center"
								}} >
								<Text _dark={{
									color: 'yellow.500'
								}}
									_light={{
										color: 'yellow.700'
									}}>
									Complete {completed}/{total} tasks
								</Text>
							</Box>
						</VStack>
					</Alert>
				</VStack>
			</Center>
		)
	}
	return (
		<Center>
			<VStack space={5} maxW="400" w='full'>
				<Alert
					w="100%"
					status="success"
					_dark={{
						bg: 'transparent',
						borderColor: 'info.400',
						borderWidth: '1'
					}}
					_light={{
						borderColor: 'green.500',
						borderWidth: '1'
					}}
					fontFamily='Inter_800ExtraBold'
				>
					<VStack space={1} flexShrink={1} w="100%" alignItems="center">

						<Text fontSize="lg" fontWeight="bold"
							_dark={{
								color: 'warmGray.50'
							}}
							_light={{
								color: 'green.700'
							}}
						>
							Congratulations !
						</Text>
						<Center w="100%">
							<Box w="80%" maxW="400">
								<VStack space="md">
									<VStack mx="4" space="md">
										<Progress max={total} colorScheme={'green'} size="md" value={completed} />
									</VStack>
								</VStack>
							</Box>
						</Center>


						<Box
							flexDirection='row'
							_text={{
								textAlign: "center"
							}} >
							<Text
								fontSize={'md'}
								fontWeight={'semibold'}
								_dark={{
									color: '#22d3ee'
								}}
								_light={{
									color: 'green.700'
								}}>
								Complete {completed}/{total} tasks
							</Text>
						</Box>
					</VStack>
				</Alert>
			</VStack>
		</Center>
	)
}
