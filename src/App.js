import React from 'react'
import './App.css'
import Upload from './components/upload'
import { messages } from './components/message'
import { SelfBuildingSquareSpinner } from 'react-epic-spinners'
import Results from './components/results'
import ClientTopNav from './components/ClientTopNav'
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
			return (
				<div>
					<ClientTopNav />
					<Upload handleFiles={this.handleFiles} />
				</div>
			)
		} else if (this.state.loc === 'results') {
			if (Object.keys(this.state.results).length) {
				return (
					<div>
						<ClientTopNav />
						<Results
							handleback={this.handleback}
							results={this.state.results}
						/>
					</div>
				)
			} else {
				const random = Math.floor(Math.random() * messages.length)
				return (
					<div>
						<ClientTopNav />
						<div className="loading">
							<SelfBuildingSquareSpinner
								color="#EE964B"
								size="140"
							/>
						</div>
						<h3 className="loading-msg">{messages[random]}</h3>
					</div>
				)
			}
		}
	}
}
