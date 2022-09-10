import {
	Avatar,
	Box,
	Heading,
	HStack,
	Stack,
	Text,
	VStack,
} from '@chakra-ui/react';
import dayjs from 'dayjs';

import { useAppSelector } from 'hooks';
import { IMessage } from 'interfaces/messaging';

type Props = {
	message: IMessage;
};

const ChatMessage = ({ message }: Props) => {
	const { user } = useAppSelector((s) => s.user!);

	const isCurrentUser = () => {
		return user?.username.toLowerCase() === message.username.toLowerCase();
	};

	return (
		<Stack
			direction={isCurrentUser() ? 'row-reverse' : 'row'}
			w="full"
			align="flex-start"
			justify="flex-start"
			mb={6}
		>
			<Avatar name={message.username} size={{ base: 'sm' }} />
			<VStack
				p={4}
				borderWidth="1px"
				rounded="md"
				align="flex-start"
				w={{ base: 'full', md: 'auto' }}
				minW={{ md: '300px' }}
				bg={isCurrentUser() ? 'purple.400' : 'auto'}
				color={isCurrentUser() ? 'White' : 'auto'}
			>
				<Heading fontSize="xs">
					{isCurrentUser() ? 'You' : message.username}
				</Heading>
				<Text fontSize="sm">{message.message}</Text>
				<HStack w="full" justify="flex-end">
					<Text fontSize="xs">
						{dayjs(message.dateAdded).format('DD MMM, YYYY h:mma')}
					</Text>
				</HStack>
			</VStack>
		</Stack>
	);
};

export default ChatMessage;
