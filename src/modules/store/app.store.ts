import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { IAppState } from '@/models/store/app.interface';

const initialState: IAppState = {
	accessToken: null,
};
const reducerSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		login: (state, action) => {},
	},
});
export const reducer = reducerSlice.reducer;
export const storeActions = reducerSlice.actions;
