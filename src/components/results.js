import React from 'react'
import Button from 'react-bootstrap/Button'

export default class Results extends React.Component {
	render() {
		const list = this.props.results.sort()
		return (
			<div className="App">
				<Button variant="primary" onClick={this.props.handleback}>
					Back
				</Button>
				{list.map((o, index) => (
					<p>
						{o.className} : {o.probability.toFixed(2)}
					</p>
				))}
			</div>
		)
	}
}
