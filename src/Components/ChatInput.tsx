import React, { useRef } from 'react';
import { chakra, HStack, IconButton, Input } from '@chakra-ui/react';
import { sendMessage } from 'feature/messaging-slice';
import { useAppDispatch, useAppSelector } from 'hooks';
import { MdSend } from 'react-icons/md';

const ChatInput = () => {
	const inputRef = useRef<HTMLInputElement>(null);
	const { user } = useAppSelector((s) => s.user);
	const dispatch = useAppDispatch();

	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!inputRef.current || !user) return;
		const msg = inputRef.current.value.trim();
		if (!msg) return;

		dispatch(
			sendMessage({
				dateAdded: new Date(),
				message: msg,
				username: user.username,
			})
		);
		inputRef.current.value = '';
	};

	return (
		<chakra.form w="full" onSubmit={submitHandler}>
			<HStack w="full" py={6} spacing={4}>
				<Input ref={inputRef} w="full" placeholder="Send Message" />
				<IconButton
					aria-label="Send Message"
					size="md"
					icon={<MdSend />}
					colorScheme="purple"
					type="submit"
				/>
			</HStack>
		</chakra.form>
	);
};

export default ChatInput;
