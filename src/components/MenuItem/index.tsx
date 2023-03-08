import { Divider, HStack, Text } from 'native-base'
import { ColorType } from 'native-base/lib/typescript/components/types'
import { ColorValue } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

interface ItemProps {
	iconName: string
	title: string
	color: ColorValue
	textColor: ColorType
	borderSize: number
}

export function MenuItem({
	iconName,
	title,
	color,
	textColor,
	borderSize
}: ItemProps) {
	return (
		<HStack
			flex={1}
			space={4}
			alignItems='center'
			textAlign={'justify'}
			justifyContent={'space-between'}
			paddingBottom={2}
		>
			<Icon
				name={iconName}
				size={25}
				color={color}
			/>
			<Text
				color={textColor}
				w={40}
			>
				{title}
			</Text>
		</HStack>
	)
}
