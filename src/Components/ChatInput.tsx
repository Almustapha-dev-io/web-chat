import { HStack, IconButton, Textarea } from '@chakra-ui/react';
import { MdSend } from 'react-icons/md';

const ChatInput = () => {
	return (
		<HStack w="full" py={6} spacing={4}>
			<Textarea resize="none" rows={1} w="full" placeholder="Send Message" />
			<IconButton
				aria-label="Send Message"
				size="md"
				icon={<MdSend />}
				colorScheme="purple"
			/>
		</HStack>
	);
};

export default ChatInput;
