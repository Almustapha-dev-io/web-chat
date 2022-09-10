import { HStack, IconButton, Textarea } from '@chakra-ui/react';
import { sendMessage } from 'feature/messaging-slice';
import { useAppDispatch, useAppSelector } from 'hooks';
import React, { useRef } from 'react';
import { MdSend } from 'react-icons/md';

const ChatInput = () => {
	const inputRef = useRef<HTMLTextAreaElement>(null);
	const { user } = useAppSelector((s) => s.user);
	const dispatch = useAppDispatch();

	const submitHandler = (e: React.FormEvent<HTMLDivElement>) => {
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
		<HStack w="full" py={6} spacing={4} as="form" onSubmit={submitHandler}>
			<Textarea
				ref={inputRef}
				resize="none"
				rows={1}
				w="full"
				placeholder="Send Message"
			/>
			<IconButton
				aria-label="Send Message"
				size="md"
				icon={<MdSend />}
				colorScheme="purple"
				type="submit"
			/>
		</HStack>
	);
};

export default ChatInput;
