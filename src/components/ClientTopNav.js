import React from 'react'
import './navbar.css'
export default class ClientTopNav extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-dark bg-primary">
				<div className="logo">
					<a href="/">
						<img
							className="img"
							src="/icon.svg"
							alt="logo"
							width="50"
							height="60"
						/>
					</a>
					<h3 className="name">Not a Dog</h3>
				</div>
			</nav>
		)
	}
}
