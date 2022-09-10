import { Flex, Text } from '@chakra-ui/react';
import uuid from 'react-uuid';

import { IMessage } from 'interfaces/messaging';
import ChatMessage from './ChatMessage';

type Props = {
	messages: IMessage[];
};

const ChatList = ({ messages }: Props) => {
	const renderMessages = () => {
		if (!messages.length) return <Text>No Messages Yet!</Text>;
		return (
			<>
				{messages.map((m) => (
					<ChatMessage message={m} key={uuid()} />
				))}
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
			overflowY="scroll"
			flexDirection="column-reverse"
		>
			{renderMessages()}
		</Flex>
	);
};

export default ChatList;
