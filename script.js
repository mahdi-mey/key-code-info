const $ = document
const locationKey = $.querySelector('#location')
const userTitle = $.querySelector('title')

const keyCodeElem = $.querySelector('#keyCode') 
const keyElem = $.querySelector('#key') 
const locationElem = $.querySelector('#location') 
const whichElem = $.querySelector('#which') 
const codeElem = $.querySelector('#code') 
const starter = document.querySelector('#starter')

document.body.addEventListener('keydown', function (event) {
	console.log(event);
    starter.style.display = 'none'

    heading.style.display = 'flex'
	ascii.style.display = 'flex'
	infos.style.display = 'flex'

    let eventKeyCode = event.keyCode
	let eventKey = event.key
	let eventLocation = event.location
	let eventWhich = event.which
	let eventCode = event.code

	keyCodeElem.textContent = eventKeyCode
	keyElem.textContent = eventKey
	locationElem.textContent = eventLocation
	whichElem.textContent = eventWhich
	codeElem.textContent = eventCode

})