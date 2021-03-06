import React from 'react'
import Button from 'react-bootstrap/Button'
import './results.css'

export default class Results extends React.Component {
	render() {
		const list = this.props.results.sort()
		var res = Math.max.apply(
			Math,
			list.map(function (o) {
				return o.probability
			})
		)
		var obj = list.find(function (o) {
			return o.probability === res
		})
		var Names = {
			dog: "It's a dog 🐶",
			notdog: "It's not a dog, sad 😢",
			Corgi: "it's a corgi 🐶",
		}
		return (
			<div class="card-holder">
				<div class="card">
					<img
						src={this.props.img}
						alt="Avatar"
						style={{ width: '270px', height: '270px' }}
					/>
					<div class="container">
						<p className="card-text">
							{
								Names[
									JSON.stringify(obj.className).replace(
										/['"]+/g,
										''
									)
								]
							}
						</p>
					</div>
				</div>
				<div></div>
				<Button
					variant="primary"
					onClick={this.props.handleback}
					className="btn-back"
				>
					Back
				</Button>
			</div>
		)
	}
}
