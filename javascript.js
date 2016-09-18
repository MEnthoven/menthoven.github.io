window.onload = function () {
	var user = 'enthoven.maarten';
	var domain = 'gmail.com';

	var span_email = document.getElementById("span_email");
	span_email.textContent= user + "@" + domain;
	
	var a_email = document.getElementById("a_email");
	a_email.setAttribute("href", "mailto:" + user + "@" + domain);
	
}

