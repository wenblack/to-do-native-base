import { Center, Heading, HStack, Modal, Spinner, Text } from 'native-base'
import { useState } from 'react'

export function ModalError() {
	const [showModal, setShowModal] = useState(true)
	function closeModal() {
		setShowModal(false)
	}

	setTimeout(() => {
		closeModal()
	}, 1000)

	return (
		<Modal
			isOpen={showModal}
			onClose={closeModal}
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
						<Text>Loading...</Text>
						<Spinner
							marginTop={2}
							size={'sm'}
						/>
					</Center>
				</Modal.Body>
			</Modal.Content>
		</Modal>
	)
}
