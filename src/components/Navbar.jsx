import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<i className="fa-solid fa-jedi"></i>
				</Link>
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle d-flex align-items-center px-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
						<span className="bg-secondary px-2 rounded text-white">0</span>
					</button>
					<ul className="dropdown-menu">
						<li><a className="dropdown-item " href="#">Empty</a></li>
					</ul>
				</div>
			</div>
		</nav>
	);
};