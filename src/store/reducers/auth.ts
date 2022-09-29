import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
	isAuth: boolean;
	isLoading: boolean;
	login: string;
	userId: number;
};

const initialState: AuthState = {
	isAuth: false,
	isLoading: false,
	login: '',
	userId: NaN
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		changeAuth: (state, action: PayloadAction<boolean>) => {
			state.isAuth = action.payload;
		},
		changeIsLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
		changeUser: (state, action: PayloadAction<{ login: string, userId: number }>) => {
			state.login = action.payload.login;
			state.userId = action.payload.userId;
		}
	}
});

export default authSlice.reducer;