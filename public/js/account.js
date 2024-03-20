var nameSpan = document.getElementById('existingName');
var emailSpan = document.getElementById('existingEmail');
var passwordElement = document.getElementById('existingPassword');
const logoutBtn = document.getElementById('logoutBtn');


function fetchUserInfo() {
	fetch('/api/loggedin-userinfo')
	.then(response => response.json())
	.then(data => {
		var name = data.name;
		nameSpan.textContent = name;
		console.log(name);

		var email = data.email;
		emailSpan.textContent = email;
		console.log(email);

		var password = data.password;
		passwordElement.value = password;
		console.log(password);
	})
	.catch(error => {
		console.error('Error:', error);
	});
};

fetchUserInfo();

// i want to send a request to the server to remove the cookies when the user clicks the logout button
logoutBtn.addEventListener('click', () => {
	fetch('/logout')
	.then(response => {
		console.log('Cookies Cleared');
		window.location.href = '/login';
	})
	.catch(error => {
		console.error('Error:', error);
	});
});