window.onload = function () {

	// scroll down
	let btn = document.getElementById('scroll-down');
	let element = document.getElementById('why-choose');

	function scrollToSmoothly(pos, time) {
    var currentPos = window.pageYOffset;
    var start = null;
    if(time == null) time = 500;
    pos = +pos, time = +time;
    window.requestAnimationFrame(function step(currentTime) {
        start = !start ? currentTime : start;
        var progress = currentTime - start;
        if (currentPos < pos) {
            window.scrollTo(0, ((pos - currentPos) * progress / time) + currentPos);
        } else {
            window.scrollTo(0, currentPos - ((currentPos - pos) * progress / time));
        }
        if (progress < time) {
            window.requestAnimationFrame(step);
        } else {
            window.scrollTo(0, pos);
        }
    });
	}

	function handleButtonClick() {
		scrollToSmoothly(element.getBoundingClientRect().top, 800);
	}

	btn.addEventListener('click', handleButtonClick);

	
}