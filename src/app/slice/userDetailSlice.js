import { createSlice } from '@reduxjs/toolkit';
import {
	createUser,
	deleteUser,
	showUser,
	updateUser,
} from '../action/userActoin';

export const userDetail = createSlice({
	name: 'userDetail',
	initialState: {
		users: [],
		loading: false,
		error: null,
		searchData: [],
	},

	reducers: {
		searchUser: (state, action) => {
			state.searchData = action.payload;
		},
	},

	extraReducers: {
		[createUser.pending]: (state) => {
			state.loading = true;
		},
		[createUser.fulfilled]: (state, action) => {
			state.loading = false;
			state.users.push(action.payload);
		},
		[createUser.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload.message;
		},
		[showUser.pending]: (state) => {
			state.loading = true;
		},
		[showUser.fulfilled]: (state, action) => {
			state.loading = false;
			state.users = action.payload;
		},
		[showUser.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},

		[deleteUser.pending]: (state) => {
			state.loading = true;
		},
		[deleteUser.fulfilled]: (state, action) => {
			state.loading = false;
			const { id } = action.payload;
			if (id) {
				state.users = state.users.filter((ele) => ele.id !== id);
			}
		},
		[deleteUser.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},

		[updateUser.pending]: (state) => {
			state.loading = true;
		},
		[updateUser.fulfilled]: (state, action) => {
			state.loading = false;
			state.users = state.users.map((ele) =>
				ele.id === action.payload.id ? action.payload : ele
			);
		},
		[updateUser.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload.message;
		},
	},
});

export default userDetail.reducer;

export const { searchUser } = userDetail.actions;
