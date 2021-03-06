import React from 'react'
import './App.css'
import Upload from './components/upload'
import { messages } from './components/message'
import Results from './components/results'
import ClientTopNav from './components/ClientTopNav'
import Footer from './components/Footer'
import { predict } from './helpers/helpers'

export default class App extends React.Component {
	state = {
		results: [],
		loc: 'home',
	}

	handleFiles = async (file, url) => {
		this.setState({ loc: 'results' })
		const img = new Image()
		img.src = url
		this.setState({
			results: await predict(img),
			imgurl: url[0],
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
					<Footer />
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
							img={this.state.imgurl}
						/>
						<Footer />
					</div>
				)
			} else {
				const random = Math.floor(Math.random() * messages.length)
				return (
					<div>
						<ClientTopNav />
						<div className="loading">
							<div className="lds-dual-ring"></div>
						</div>
						<h3 className="loading-msg">{messages[random]}</h3>
					</div>
				)
			}
		}
	}
}
