const hamburgerBtn = document.querySelector('.hamburger')
const nav = document.querySelector('.nav')
const footerYear = document.querySelector('.footer__year')

const hamburgerAnimation = () => {
	hamburgerBtn.classList.toggle('is-active')
	nav.classList.toggle('nav-mobile--active')
	document.body.classList.toggle('sticky-body')
}



const addYear = () => {
	const date = new Date()
	const year = date.getFullYear()
	footerYear.textContent = `${year}`
}

hamburgerBtn.addEventListener('click', hamburgerAnimation)

addYear()
