
var indexUrl = 'https://kaioguerrero.com/atletas';
var login = document.querySelector('#atletas');

login.addEventListener('submit', function(event) {
	event.preventDefault();
	
	window.location.href = [indexUrl, login.fone.value].join('/');
});


