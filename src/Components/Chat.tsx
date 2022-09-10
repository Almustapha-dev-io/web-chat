import { Button, Flex, HStack, Text } from '@chakra-ui/react';
import { useAppSelector } from 'hooks';
import ChatInput from './ChatInput';
import ChatList from './ChatList';

const Chat = () => {
	const { messages } = useAppSelector((s) => s.messaging);
	const { user } = useAppSelector((s) => s.user);

	return (
		<Flex
			w="full"
			maxW="container.md"
			h="full"
			mx="auto"
			flexDirection="column"
		>
			<HStack w="full" py={2} justify="space-between">
				<Text fontSize="sm">{user?.username}</Text>
				<Button size="sm">Sign out</Button>
			</HStack>
			<ChatList messages={messages} />
			<ChatInput />
		</Flex>
	);
};

export default Chat;
