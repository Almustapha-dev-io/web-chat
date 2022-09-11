import { Box } from '@chakra-ui/react';
import Chat from 'Components/Chat';
import Signup from 'Components/Signup';
import { useAppSelector } from 'hooks';

const App = () => {
	const isAuth = useAppSelector((s) => s.user.user !== null);

	let content = <Signup />;
	if (isAuth) {
		content = <Chat />;
	}

	return (
		<Box w="full" h="100vh" px={4} py={6} overflow="hidden">
			{content}
		</Box>
	);
};

export default App;
