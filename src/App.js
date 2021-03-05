import React from 'react'
import Upload from './components/upload'
import Results from './components/results'
import { predict } from './helpers/helpers'

var loadImage = require('blueimp-load-image')

export default class App extends React.Component {
	state = {
		results: [],
	}

	handleFiles = (e) => {
		loadImage(
			e.target.files[0],
			async (img) => {
				this.setState({ results: await predict(img) })
			},
			{ maxWidth: 600 } // Options
		)
	}
	handleback = () => {
		this.setState({ results: [] })
	}

	render() {
		if (Object.keys(this.state.results).length) {
			return (
				<Results
					handleback={this.handleback}
					results={this.state.results}
				/>
			)
		} else {
			return <Upload handleFiles={this.handleFiles} />
		}
	}
}
