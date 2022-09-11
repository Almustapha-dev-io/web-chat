import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

import userReducer from 'feature/user-slice';
import messagingReducer from 'feature/messaging-slice';

import {
	createStateSyncMiddleware,
	initMessageListener,
} from 'redux-state-sync';

const stateSyncConfig = {
	blacklist: ['user/signIn', 'user/signOut'],
};

const rootPersistConfig = {
	key: 'root',
	storage,
	whitelist: ['messaging'],
};

const rootReducer = combineReducers({
	user: userReducer,
	messaging: messagingReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV !== 'production',
	middleware: (getDefaultMiddleware) => [
		...getDefaultMiddleware(),
		createStateSyncMiddleware(stateSyncConfig),
	],
});

initMessageListener(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);
export default store;
