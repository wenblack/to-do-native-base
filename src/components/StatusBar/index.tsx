import { Center, HStack, IconButton, Text, useColorMode, VStack, Alert, Box } from 'native-base'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { fontProps } from '../../util/globalInterface'

interface boxProps {
	total: number
	completed: number
	type?: 'info' | 'warning' | 'success' | 'error' | (string & {});
}


export function StatusBar({ total, completed, type }: boxProps) {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<Center>
			<VStack space={5} maxW="400" w={80}>
				<Alert w="100%" status="error" _dark={{
					bg: 'gray.600'
				}}

				>
					<VStack space={1} flexShrink={1} w="100%" alignItems="center">

						<Alert.Icon size="md" />
						<Text fontSize="md" fontWeight="medium" _dark={{
							color: "warmGray.50"
						}}>
							Congrats!
						</Text>

						<Box
							flexDirection='row'
							_text={{
								textAlign: "center"
							}} _dark={{
								_text: {
									color: "coolGray.600"
								}
							}}>
							<Text>
								Complete {completed}/{total} tasks
							</Text>
						</Box>
					</VStack>
				</Alert>
			</VStack>
		</Center>
	)
}
