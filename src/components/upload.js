import React from 'react'
import './upload.css'

export default class Upload extends React.Component {
	render() {
		return (
			<div className="btn-upload">
				<input
					type="file"
					className="upload"
					accept="image/*"
					onChange={this.props.handleFiles}
				/>
			</div>
		)
	}
}
