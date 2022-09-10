import {
	chakra,
	Button,
	Flex,
	FormControl,
	FormLabel,
	Input,
	VStack,
	FormErrorMessage,
	FormHelperText,
} from '@chakra-ui/react';
import React, { useRef, useState } from 'react';

const Signup = () => {
	const [error, setError] = useState('');
	const inputRef = useRef<HTMLInputElement>(null);

	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const value = inputRef.current?.value.trim();
		if (!value) {
			return setError((_) => 'Enter a valid username');
		}
	};

	return (
		<Flex
			w="full"
			h="full"
			justify="center"
			align="flex-start"
			px={4}
			pt={{ base: '10rem', md: '300px' }}
		>
			<chakra.form onSubmit={submitHandler} w="full">
				<VStack w={{ base: 'full', md: '400px' }} spacing="4" mx="auto">
					<FormControl isRequired isInvalid={Boolean(error)}>
						<FormLabel>Username</FormLabel>
						<Input ref={inputRef} />
						{error ? (
							<FormErrorMessage>Please enter a valid username</FormErrorMessage>
						) : (
							<FormHelperText>Enter your username to proceed</FormHelperText>
						)}
					</FormControl>
					<Button size="lg" w="full" colorScheme="purple" type="submit">
						Proceed
					</Button>
				</VStack>
			</chakra.form>
		</Flex>
	);
};

export default Signup;
