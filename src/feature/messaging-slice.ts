import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMessage } from 'interfaces/messaging';

type MessagingState = {
	messages: IMessage[];
};

const initialState: MessagingState = {
	messages: [],
};

const slice = createSlice({
	name: 'messaging',
	initialState,
	reducers: {
		sendMessage(state, { payload }: PayloadAction<IMessage>) {
			state.messages.unshift(payload);
		},
	},
});

export const { sendMessage } = slice.actions;
export default slice.reducer;
