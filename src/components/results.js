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
		return (
			<div>
				<div>
					<img
						src={this.props.img}
						alt="test"
						width="200"
						height="300"
					/>
				</div>
				<h2>{JSON.stringify(obj.className).replace(/['"]+/g, '')}</h2>
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
