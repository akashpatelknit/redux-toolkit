import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from '../app/action/userActoin';
const Update = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [updateData, setUpdateData] = useState();

	const { users } = useSelector((state) => state.app);

	useEffect(() => {
		if (id) {
			const singleUser = users.filter((ele) => ele.id === id);
			setUpdateData(singleUser[0]);
		}
	}, []);

	const newData = (e) => {
		setUpdateData({ ...updateData, [e.target.name]: e.target.value });
	};

	console.log('updated data', updateData);

	const handleUpdate = (e) => {
		e.preventDefault();
		dispatch(updateUser(updateData));
		navigate('/read');
	};

	return (
		<div>
			<h2 className="my-2">Edit the data</h2>
			<form className="w-50 mx-auto my-5" onSubmit={handleUpdate}>
				<div class="mb-3">
					<label class="form-label">Name</label>
					<input
						type="text"
						name="name"
						class="form-control"
						value={updateData && updateData.name}
						onChange={newData}
					/>
				</div>
				<div class="mb-3">
					<label class="form-label">Title</label>
					<input
						type="text"
						name="title"
						class="form-control"
						value={updateData && updateData.title}
						onChange={newData}
					/>
				</div>
				<div class="mb-3">
					<label class="form-label">Description</label>
					<textarea
						type="text"
						name="description"
						class="form-control"
						value={updateData && updateData.description}
						onChange={newData}
					/>
				</div>

				<button type="submit" class="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
	);
};

export default Update;
