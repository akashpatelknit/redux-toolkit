import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchUser } from '../app/slice/userDetailSlice';

const Navbar = () => {
	const allusers = useSelector((state) => state.app.users);
	console.log(allusers);
	const dispatch = useDispatch();

	const [searchData, setSearchData] = useState('');

	useEffect(() => {
		dispatch(searchUser(searchData));
	}, [searchData]);

	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid ">
					<h4 className="navbar-brand">RTK</h4>

					<div className=" ">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link to="/" className="nav-link">
									Create Post
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/read" className="nav-link">
									All Post ({allusers.length})
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
