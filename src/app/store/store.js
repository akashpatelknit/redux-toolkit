import { configureStore } from '@reduxjs/toolkit';
import userDetail from '../slice/userDetailSlice';
export const store = configureStore({
	reducer: {
		app: userDetail,
	},
});
