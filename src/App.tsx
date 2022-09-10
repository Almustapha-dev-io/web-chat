import { Box } from '@chakra-ui/react';
import Chat from 'Components/Chat';
import Signup from 'Components/Signup';

const App = () => {
	return (
		<Box w="full" h="100vh" px={4} py={6} overflow="hidden">
			{/* <Signup /> */}
			<Chat />
		</Box>
	);
};

export default App;
