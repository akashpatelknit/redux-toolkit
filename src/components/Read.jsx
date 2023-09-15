import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CustomModal from './CustomModal';
import { deleteUser, showUser } from '../app/action/userActoin';
import './read.css';
const Read = () => {
	const dispatch = useDispatch();

	const [id, setId] = useState();

	const [showPopup, setShowPopup] = useState(false);

	const { users, loading } = useSelector((state) => state.app);

	useEffect(() => {
		dispatch(showUser());
	}, []);

	if (loading) {
		return <h2>Loading</h2>;
	}

	return (
		<div>
			{showPopup && (
				<CustomModal
					id={id}
					showPopup={showPopup}
					setShowPopup={setShowPopup}
				/>
			)}
			<h2>All data</h2>

			<div className="allData">
				{users &&
					users.map((ele) => (
						<div key={ele.id} className="card  mx-auto my-2">
							<div className="card-body">
								<div className="author d-flex">
									<h5 className="card-name ">
										Author: {ele.name}
									</h5>
								</div>
								<div className="card-text d-flex flex-column">
									<h6 className=" mb-2 text-muted fs-4 text-left">
										{ele.title}
									</h6>
									<p className="card-text ">
										{ele.description}
									</p>
								</div>

								<Link
									to={`/edit/${ele.id}`}
									className="card-link"
								>
									Edit
								</Link>
								<Link
									onClick={() => dispatch(deleteUser(ele.id))}
									className="card-link"
								>
									Delete
								</Link>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default Read;
