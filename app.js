const menu=document.querySelector('.fa-bars');
const nav=document.querySelector('.menu-list');
const header=document.querySelector('.head-txt');
menu.addEventListener('click', function () {
	console.log('clicked');
	nav.classList.toggle('menu-hidden');
})
nav.addEventListener('click', function () {
	nav.classList.toggle('menu-hidden');
})
header.addEventListener('click', function () {
	nav.classList.add('menu-hidden');
})