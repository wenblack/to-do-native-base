import { VStack, Menu, Select, CheckIcon, Button } from 'native-base'
import { useState } from 'react'

export function MenuRight() {
	const [shouldOverlapWithTrigger] = useState(false)
	return (
		<VStack
			space={6}
			alignSelf='flex-start'
			w='100%'
		>
			<Menu
				w='160'
				shouldOverlapWithTrigger={shouldOverlapWithTrigger} // @ts-ignore
				placement={'bottom right'}
				trigger={(triggerProps) => {
					return (
						<Button
							alignSelf='center'
							variant='solid'
							colorScheme={'blue'}
							{...triggerProps}
						>
							Menu
						</Button>
					)
				}}
			>
				<Menu.Item>Change Name</Menu.Item>
				<Menu.Item>Change Theme</Menu.Item>
				<Menu.Item>LogOut</Menu.Item>
				<Menu.Item>Roboto</Menu.Item>
			</Menu>
		</VStack>
	)
}
