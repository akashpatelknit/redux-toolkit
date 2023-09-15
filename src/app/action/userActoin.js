import { createAsyncThunk } from '@reduxjs/toolkit';
const url = 'https://6503f414c8869921ae244e7d.mockapi.io/curd';

//create action
export const createUser = createAsyncThunk(
	'createUser',
	async (data, { rejectWithValue }) => {
		console.log('data', data);
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});

		try {
			const result = await response.json();
			return result;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

//read action
export const showUser = createAsyncThunk(
	'showUser',
	async (args, { rejectWithValue }) => {
		const response = await fetch(url);

		try {
			const result = await response.json();
			console.log(result);
			return result;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

//delete action
export const deleteUser = createAsyncThunk(
	'deleteUser',
	async (id, { rejectWithValue }) => {
		const response = await fetch(`${url}/${id}`, { method: 'DELETE' });

		try {
			const result = await response.json();
			console.log(result);
			return result;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

//update action
export const updateUser = createAsyncThunk(
	'updateUser',
	async (data, { rejectWithValue }) => {
		console.log('updated data', data);
		const response = await fetch(`${url}/${data.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});

		try {
			const result = await response.json();
			return result;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);
