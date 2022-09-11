import { Flex, Text } from '@chakra-ui/react';
import { useAppSelector } from 'hooks';
import uuid from 'react-uuid';

import ChatMessage from './ChatMessage';

const ChatList = () => {
	const { messages } = useAppSelector((s) => s.messaging);
	const renderMessages = () => {
		if (!messages.length)
			return <Text textAlign="center">No Messages Yet!</Text>;
		return (
			<>
				{messages.map((m) => (
					<ChatMessage message={m} key={uuid()} />
					))}
					<>Boy</>
			</>
		);
	};

	return (
		<Flex
			px={4}
			py={8}
			w="full"
			flexGrow={1}
			borderWidth="1px"
			rounded="xl"
			overflowY="auto"
			flexDirection="column-reverse"
		>
			{renderMessages()}
		</Flex>
	);
};

export default ChatList;
