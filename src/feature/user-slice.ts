import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from 'interfaces/user';

type UserState = {
	user: IUser | null;
};

const initialState: UserState = {
	user: null,
};

const slice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		signIn(state, { payload }: PayloadAction<string>) {
			state.user = {
				username: payload,
			};
		},

		signOut(state) {
			state.user = null;
		},
	},
});

export const { signIn, signOut } = slice.actions;
export default slice.reducer;
