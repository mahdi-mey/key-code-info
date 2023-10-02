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
})