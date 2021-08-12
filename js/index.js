window.onload = function () {

	// scroll down
	let element = document.getElementById('why-choose');
	let btn = document.getElementById('scroll-down');

	function handleButtonClick() {
	  element.scrollIntoView({block: 'start', behavior: 'smooth'});
	}

	btn.addEventListener('click', handleButtonClick);
}
