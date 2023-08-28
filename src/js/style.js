document.addEventListener('DOMContentLoaded', (e) => {
	burger();
	mobChose();
});

function burger() {
	let burgerButton = document.querySelector('.grow__burger');
	let burgerMenu = document.querySelector('.grow__nav');
	if (burgerButton) {
		burgerButton.addEventListener('click', () => {
			burgerButton.classList.toggle('active')
			burgerMenu.classList.toggle('active');
			document.body.classList.toggle('lock');
		})
	}
};

function mobChose() {
	const isMobile = {
		Android: function () { return navigator.userAgent.match(/Android/i); },
		BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
		iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
		Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
		Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
		any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
	};

	if (isMobile.any()) {
		document.body.classList.add('touch');
		let arrows = document.querySelectorAll('.grow__arrow');
		if (arrows) {
			arrows.forEach(arrow => {
				arrow.addEventListener('click', (e) => {
					arrow.nextElementSibling.classList.toggle('active');
					arrow.parentElement.classList.toggle('active');
				})
			})
		}
	} else {
		document.body.classList.add('nottouch');
	}
}
