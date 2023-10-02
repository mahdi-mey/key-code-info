const starter = document.querySelector('#starter')

document.body.addEventListener('keydown', function (event) {
	console.log(event);
    starter.style.display = 'none'
})