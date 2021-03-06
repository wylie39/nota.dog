import * as tmImage from '@teachablemachine/image'

const URL = 'https://teachablemachine.withgoogle.com/models/gCL3kX8SI/' // TODO: get from poramitor
const modelURL = URL + 'model.json'
const metadataURL = {
	tfjsVersion: '1.3.1',
	tmVersion: '2.3.1',
	packageVersion: '0.8.4',
	packageName: '@teachablemachine/image',
	timeStamp: '2021-03-05T16:32:01.301Z',
	userMetadata: {},
	modelName: 'tm-my-image-model',
	labels: ['dog', 'notdog', 'Corgi'],
}
let model

export async function predict(img) {
	model = await tmImage.load(modelURL, metadataURL)
	const prediction = await model.predict(img)
	return prediction
}
