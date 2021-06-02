const navbar = document.getElementById('navbar').getBoundingClientRect()
document.body.style.paddingTop = `${navbar.height}px`

const navTabs=Array.from(document.getElementsByClassName('nav-item'))

function navClick(e) {
	var elem = e.target

	document.getElementsByClassName('nav-active')[0].classList.remove('nav-active')
	elem.classList.add('nav-active')
}

navTabs.map(elem=>elem.addEventListener('click',navClick))

const tabs=Array.from(document.getElementsByClassName('tab'))

function tabClick(e){
	var elem=e.target
	
	document.getElementsByClassName('active-tab')[0].classList.remove('active-tab')
	elem.classList.add('active-tab')
	
	var id=elem.getAttribute('data-tab-id')
	document.getElementsByClassName('active')[0].classList.remove('active')
	document.getElementById(id).classList.add('active')
}

tabs.map(elem=>elem.addEventListener('click',tabClick))