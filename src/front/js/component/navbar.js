import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Jeankory Valdes</span>
				</Link>
				
				<div className="ml-auto">
					<Link to="/experiencepage">
						<button className="btn">Experience</button>
					</Link>
				</div>
				<div className="ml-auto">
					<Link to="/workpage">
						<button className="btn">Work/ Projects</button>
					</Link>
				</div>
				<div className="ml-auto">
					<Link to="/contactpage">
						<button className="btn">Contact</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
