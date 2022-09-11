import { Button, Flex, HStack, Text } from '@chakra-ui/react';
import { signOut } from 'feature/user-slice';
import { useAppDispatch, useAppSelector } from 'hooks';
import ChatInput from './ChatInput';
import ChatList from './ChatList';

const Chat = () => {
	const { user } = useAppSelector((s) => s.user);

	const dispatch = useAppDispatch();

	const onSignOut = () => {
		dispatch(signOut());
	};

	return (
		<Flex
			w="full"
			maxW="container.md"
			h="full"
			mx="auto"
			flexDirection="column"
		>
			<HStack w="full" py={2} justify="space-between">
				<Text fontSize="sm" textTransform="uppercase" fontWeight="medium">
					{user?.username}
				</Text>
				<Button size="sm" onClick={onSignOut}>
					Sign out
				</Button>
			</HStack>
			<ChatList />
			<ChatInput />
		</Flex>
	);
};

export default Chat;
