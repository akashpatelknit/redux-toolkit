import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../app/action/userActoin';
const Create = () => {
	const [users, setUsers] = useState({});

	const navigate = useNavigate();

	const dispatch = useDispatch();

	const getUserData = (e) => {
		setUsers({ ...users, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('users...', users);
		dispatch(createUser(users));
		navigate('/read');
	};

	return (
		<div>
			<h2 className="my-2">Fill the data</h2>
			<form className="w-50 mx-auto my-5" onSubmit={handleSubmit}>
				<div class="mb-3">
					<label class="form-label">Name</label>
					<input
						type="text"
						name="name"
						class="form-control"
						onChange={getUserData}
						required
					/>
				</div>
				<div class="mb-3">
					<label class="form-label">Title</label>
					<input
						type="text"
						name="title"
						class="form-control"
						onChange={getUserData}
						required
					/>
				</div>
				<div class="mb-3">
					<label class="form-label">Description</label>
					<input
						type="text"
						name="description"
						class="form-control"
						onChange={getUserData}
						required
					/>
				</div>
				<button type="submit" class="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
	);
};

export default Create;
