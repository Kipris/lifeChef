document.addEventListener("DOMContentLoaded", () => {

	// scroll down
	window.__forceSmoothScrollPolyfill__ = true;
	const btnDown = document.getElementById('scroll-down');
	const element = document.getElementById('why-choose');

	function handleScrollDown() {
		element.scrollIntoView({ block: 'start', behavior: 'smooth' });
	}

	btnDown.addEventListener('click', handleScrollDown);

	// sticky button
	const target = document.querySelector('.main-cta');
	const bottomElement = document.getElementById('proposal');
	window.addEventListener('scroll', function () {
		let currentPos = window.scrollY;
		let reached = currentPos >= bottomElement.getBoundingClientRect().top;
		if (currentPos >= element.getBoundingClientRect().top && !reached) {
			target.classList.add('sticky');
		} else {
			target.classList.remove('sticky');
		}
	});

	// gif lazy load
	const images = Array.from(document.querySelectorAll('.lazy-image img'));

	if ('IntersectionObserver' in window) {
		const imageObserver = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					const image = entry.target;

					image.src = image.dataset.src;
					image.onload = () => image.previousElementSibling.remove();

					imageObserver.unobserve(image);
				}
			});
		});

		images.forEach(img => imageObserver.observe(img));
	}

	// toggle why-choose
	if (window.innerWidth <= 767) {
		const reasons = Array.from(document.querySelectorAll('.reason'));
		reasons.forEach(reason => {
			reason.addEventListener('click', () => {
				reason.classList.toggle('closed')
			})
		})
	}
	
})