import { Center, HStack, IconButton, Link, Text, useColorMode } from 'native-base'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { fontProps } from '../../util/globalInterface'

export function Footer({ font }: fontProps) {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<Center>
			<Text
				marginTop={1}
				_dark={{ color: '#d4d4d4' }}
				color={'muted.600'}
				fontFamily={font}
				fontSize='md'
			>
				Made with 💗 by Wender
			</Text>
			<HStack
				space={4}
				marginTop={2}
			>
				<Link
					href='https://www.linkedin.com/in/wender-jose-santos-4b1473217/'>
					<IconButton
						background={'transparent'}
						icon={
							<MaterialIcons
								name='linkedin'
								size={30}
								color={colorMode === 'light' ? '#737373' : '#d4d4d4'}
							/>
						}
					/>
				</Link>
				<Link href='https://github.com/wenblack'>
					<IconButton
						background={'transparent'}
						icon={
							<MaterialIcons
								name='github'
								size={30}
								color={colorMode === 'light' ? '#737373' : '#d4d4d4'}
							/>
						}
					/>
				</Link>
				<Link href='mailto:wenblack012@gmail.com?subject=Contact To-Do List'>
					<IconButton
						background={'transparent'}
						icon={
							<MaterialIcons
								name='gmail'
								size={30}
								color={colorMode === 'light' ? '#737373' : '#d4d4d4'}
							/>
						}
					/>
				</Link>
				<Link href='https://api.whatsapp.com/send/?phone=5511992566539'>
					<IconButton
						background={'transparent'}
						icon={
							<MaterialIcons
								name='whatsapp'
								size={30}
								color={colorMode === 'light' ? '#737373' : '#d4d4d4'}
							/>
						}
					/>
				</Link>
			</HStack>
		</Center>
	)
}
