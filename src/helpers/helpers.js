import * as tmImage from '@teachablemachine/image'

const URL = 'https://teachablemachine.withgoogle.com/models/gCL3kX8SI/' // TODO: get from poramitor
const modelURL = URL + 'model.json'
const metadataURL = URL + 'metadata.json'
let model, maxPredictions

export async function predict(img) {
	model = await tmImage.load(modelURL, metadataURL)
	maxPredictions = model.getTotalClasses()
	const prediction = await model.predict(img)
	return prediction
}
