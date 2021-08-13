document.addEventListener("DOMContentLoaded", () => {

	// google analytics
	const cta = document.getElementById('button');
	cta.addEventListener('click', function () {
		const source = this.closest('section').id;
		document.head.append(`<script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
			ga('create', 'GTM-P5NWMTS', 'auto');
			ga('send', '${source} block');</script>`);
	});

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