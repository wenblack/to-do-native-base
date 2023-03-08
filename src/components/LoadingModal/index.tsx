import { Center, Spinner, Modal, Text, HStack, VStack } from 'native-base'
import { fontProps } from '../../util/globalInterface'

export function LoadingModal({ fontTitle }: fontProps) {
	return (
		<Modal
			isOpen={true}
			_backdrop={{
				_dark: {
					bg: 'coolGray.800'
				},
				bg: 'warmGray.50'
			}}
			shadow='2'
			overlayVisible={false}
			backgroundColor={'gray.100'}
			_dark={{
				backgroundColor: '#0f172a'
			}}
		>
			<Modal.Content>
				<Modal.Body marginBottom={5}>
					<Center>
						<VStack
							space={2}
							alignItems='center'
							justifyContent={'center'}
						>
							<Text
								fontFamily={fontTitle}
							>
								Loading...
							</Text>
							<Spinner
								marginTop={2}
								size={'sm'}
							/>
						</VStack>
					</Center>
				</Modal.Body>
			</Modal.Content>
		</Modal>
	)
}
