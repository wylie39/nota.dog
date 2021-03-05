import React from 'react'

export default class Upload extends React.Component {
	render() {
		return (
			<div className="App">
				<input
					type="file"
					accept="image/*"
					onChange={this.props.handleFiles}
				/>
			</div>
		)
	}
}
