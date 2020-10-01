if ('serviceWorker' in navigator) {
	navigator.serviceWorker
		.register('/service-worker.js')
		.catch(console.error)
}

const CLIENT_ID =
	'260311669368-8plvbh5dg5k444oa849tp6ugot375iad.apps.googleusercontent.com'
'WO3CIYRk-tjvIIvMFcQW704S'
const API_KEY = 'AIzaSyCqUYydnMbo3fUSdMidiTE8BOhSQRomJHU'

const DISCOVERY_DOCS = [
	'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'
]

const SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly'

document.addEventListener('DOMContentLoaded', () => {
	document
		.getElementById('authorize')
		.addEventListener('click', authorize)
	document
		.getElementById('signout')
		.addEventListener('click', signout)
})

function authorize () {

}

function signout () {

}
