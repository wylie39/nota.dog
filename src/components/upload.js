import React from 'react'
import './upload.css'
import ImageUploader from 'react-images-upload'

export default class Upload extends React.Component {
	render() {
		return (
			<div>
				<div className="card-holder">
					<div className="card-upload">
						<p>
							Click below to take or upload an image and the
							Machine learning algorithm will tell if the image is
							a dog or not. And because this is for Corgi Hacks it
							can also tell if it’s a corgi.
						</p>
					</div>
				</div>
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
