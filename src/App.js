import React from 'react'
import Upload from './components/upload'
import Results from './components/results'
import { predict } from './helpers/helpers'

var loadImage = require('blueimp-load-image')

export default class App extends React.Component {
	state = {
		results: [],
		loc: 'home',
	}

	handleFiles = (e) => {
		this.setState({ results: [] })
		this.setState({ loc: 'results' })
		loadImage(e.target.files[0], async (img) => {
			this.setState({ results: await predict(img) })
		})
	}
	handleback = () => {
		this.setState({ results: [], loc: 'home' })
	}

	render() {
		if (this.state.loc === 'home') {
			return <Upload handleFiles={this.handleFiles} />
		} else if (this.state.loc === 'results') {
			if (Object.keys(this.state.results).length) {
				return (
					<Results
						handleback={this.handleback}
						results={this.state.results}
					/>
				)
			} else {
				return <h1>loading</h1>
			}
		}
	}
}
