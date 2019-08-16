import React from 'react'
import { Link } from 'react-router-dom'

function NavBar(props) {
	return (
		<nav className="navbar navbar-expand-lg navbar-bg-light navbar-bg">
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarTogglerDemo01"
				aria-controls="navbarTogglerDemo01"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
				<button className="btn btn-link navbar-brand text-white">
					Planr
				</button>
				<ul className="navbar-nav mr-auto" />
				<ul className="navbar-nav mt-2 mt-lg-0 ">
					<li className="nav-item active">
						<Link to="/projects">Projects</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default NavBar
