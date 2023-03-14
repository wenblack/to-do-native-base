import { Center, Progress, HStack, IconButton, Text, useColorMode, VStack, Alert, Box } from 'native-base'
import { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'

interface boxProps {
	total: number
	completed: number
	type?: 'info' | 'warning' | 'success' | 'error' | (string & {});
}


export function StatusBar({ total, completed, type }: boxProps) {
	const { colorMode, toggleColorMode } = useColorMode()

	if (total === completed) {
		return (
			<Center>
				<VStack maxW="800" w='full'>
					<Alert
						w="100%"
						status="warning"
						_dark={{
							bg: 'blueGray.900',
						}}
						_light={{
							bg: 'blueGray.50'
						}}
						fontFamily='Inter_800ExtraBold'
					>
						<VStack space={1} flexShrink={1} w="100%" alignItems="center">
							<Center w="100%" mt={4} mb={2}>
								<Box w="100%" maxW="400">
									<VStack space="md">
										<VStack space="md">
											<Progress
												max={total}
												colorScheme={'green'}
												size="md"
												mx={4}
												value={completed}
											/>
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
									fontSize={'lg'}
									fontFamily='Inter_700Bold'
									_dark={{
										color: 'green.500'
									}}
									_light={{
										color: 'green.500'
									}}>
									Complete {completed}/{total} tasks
								</Text>
							</Box>
						</VStack>
					</Alert>
				</VStack>
			</Center>
		)
	} else if (total * 0.5 >= completed) {
		return (
			<Center>
				<VStack maxW="800" w='full'>
					<Alert
						w="100%"
						status="error"
						_dark={{
							bg: 'blueGray.900',
						}}
						_light={{
							bg: 'blueGray.50'
						}}
						fontFamily='Inter_800ExtraBold'
					>
						<VStack space={1} flexShrink={1} w="100%" alignItems="center">
							<Center w="100%" mt={4} mb={2}>
								<Box w="100%" maxW="400">
									<VStack space="md">
										<VStack space="md">
											<Progress
												max={total}
												colorScheme={'red'}
												size="md"
												mx={4}
												value={completed}
											/>
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
									fontSize={'lg'}
									fontFamily='Inter_700Bold'
									_dark={{
										color: 'red.500'
									}}
									_light={{
										color: 'red.500'
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
			<VStack maxW="800" w='full'>
				<Alert
					w="100%"
					status="warning"
					_dark={{
						bg: 'blueGray.900',
					}}
					_light={{
						bg: 'blueGray.50'
					}}
					fontFamily='Inter_800ExtraBold'
				>
					<VStack space={1} flexShrink={1} w="100%" alignItems="center">
						<Center w="100%" mt={4} mb={2}>
							<Box w="100%" maxW="400">
								<VStack space="md">
									<VStack space="md">
										<Progress
											max={total}
											colorScheme={'yellow'}
											size="md"
											mx={4}
											value={completed}
										/>
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
								fontSize={'lg'}
								fontFamily='Inter_700Bold'
								_dark={{
									color: 'yellow.500'
								}}
								_light={{
									color: 'yellow.500'
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
