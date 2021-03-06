import React from 'react'
import './navbar.css'
export default class ClientTopNav extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-dark bg-primary fixed-top">
				<div className="logo">
					<a href="/">
						<img
							src="/icon.svg"
							alt="logo"
							width="50"
							height="60"
						/>
					</a>
					<h3 className="name">Not A Dog</h3>
				</div>
			</nav>
		)
	}
}
