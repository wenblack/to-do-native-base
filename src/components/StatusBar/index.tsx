import { Center, HStack, IconButton, Text, useColorMode, VStack, Alert, Box } from 'native-base'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { fontProps } from '../../util/globalInterface'

export function StatusBar({ font }: fontProps) {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<Center>
			<VStack space={5} maxW="400">
				<Alert w="100%" status="success">
					<VStack space={1} flexShrink={1} w="100%" alignItems="center">
						<Alert.Icon size="md" />
						<Text fontSize="md" fontWeight="medium" _dark={{
							color: "coolGray.800"
						}}>
							Application received!
						</Text>

						<Box _text={{
							textAlign: "center"
						}} _dark={{
							_text: {
								color: "coolGray.600"
							}
						}}>
							Your application has been received. We will review your
							application and respond within the next 48 hours.
						</Box>
					</VStack>
				</Alert>
			</VStack>
		</Center>
	)
}
