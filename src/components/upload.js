import React from 'react'
import './upload.css'
import ImageUploader from 'react-images-upload'

export default class Upload extends React.Component {
	render() {
		return (
			<div className="btn-upload">
				<ImageUploader
					withIcon={true}
					buttonText="Choose image"
					onChange={this.props.handleFiles}
					imgExtension={['.jpg', '.png', '.jpeg']}
					maxFileSize={5242880}
					className="upload"
					singleImage={true}
				/>
			</div>
		)
	}
}
