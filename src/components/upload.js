import React from 'react'
import './upload.css'
import ImageUploader from 'react-images-upload'

export default class Upload extends React.Component {
	render() {
		return (
			<div>
				<div className="upload-div">
					<ImageUploader
						withIcon={true}
						buttonText="Choose an image"
						onChange={this.props.handleFiles}
						imgExtension={['.jpg', '.png', '.jpeg']}
						maxFileSize={5242880}
						buttonClassName={'btn-upload'}
						className="upload"
						singleImage={true}
					/>
				</div>
			</div>
		)
	}
}
