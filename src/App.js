import React from 'react'
import { predict } from './helpers/helpers'
var loadImage = require('blueimp-load-image')

export default class App extends React.Component {
	state = {
		data: [],
	}

	handleFiles = (e) => {
		loadImage(
			e.target.files[0],
			async (img) => {
				this.setState({ data: await predict(img) })
			},
			{ maxWidth: 600 } // Options
		)
	}

	render() {
		if (Object.keys(this.state.data).length) {
			const list = this.state.data.sort()
			return (
				<div className="App">
					<input
						type="file"
						accept="image/*"
						onChange={this.handleFiles}
					/>
					{list.map((o, index) => (
						<p>
							{o.className} : {o.probability.toFixed(2)}
						</p>
					))}
				</div>
			)
		} else {
			return (
				<div className="App">
					<input
						type="file"
						accept="image/*"
						onChange={this.handleFiles}
					/>
				</div>
			)
		}
	}
}
