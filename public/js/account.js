const nameForm = document.getElementById('nameForm');
const emailForm = document.getElementById('emailForm');
const passwordForm = document.getElementById('passwordForm');

var existingNameSpan = document.getElementById('existingName');
var existingEmailSpan = document.getElementById('existingEmail');

var newNameElement = document.getElementById('newName');
var newEmailElement = document.getElementById('newEmail');
var newPasswordElement = document.getElementById('newPassword');
var confirmPasswordElement = document.getElementById('confirmPassword');

const logoutBtn = document.getElementById('logoutBtn');


function fetchUserInfo() {
	return fetch('/api/loggedin-userinfo')
	.then(response => response.json())
	.then(data => {
		var id = data.userid;
		console.log('id: ' + id);

		var name = data.name;
		existingNameSpan.textContent = name;
		console.log('name: ' + name);

		var email = data.email;
		existingEmailSpan.textContent = email;
		console.log('email: ' + email);
	})
	.catch(error => {
		console.error('Error:', error);
	});
};
fetchUserInfo();


nameForm.addEventListener('submit', function(event) {
	event.preventDefault();

	fetchUserInfo().then(id => {
		const newName = newNameElement.value;

		fetch('/api/updateusername', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ id, newName }),
		})
		.then(response => response.json())
		.then(data => {
			if (data.success) {
				alert('Name updated successfully');
				window.location.reload();
			} else {
				alert('Failed to update name');
			}
		})
		.catch((error) => {
			console.error('Error:', error);
			alert('Failed to update name');
		});
	});
});


emailForm.addEventListener('submit', function(event) {
	event.preventDefault();

	fetchUserInfo().then(id => {
		const newEmail = newEmailElement.value;

		fetch('/api/updateuseremail', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ id, newEmail }),
		})
		.then(response => response.json())
		.then(data => {
			if (data.success) {
				alert('Email updated successfully');
				window.location.reload();
			} else {
				alert('Failed to update email');
			}
		})
		.catch((error) => {
			console.error('Error:', error);
			alert('Failed to update email');
		});
	});
});


passwordForm.addEventListener('submit', function(event) {
	event.preventDefault();

	fetchUserInfo().then(id => {
		const newPassword = newPasswordElement.value;
		const confirmPassword = confirmPasswordElement.value;

		if (newPassword !== confirmPassword) {
			alert('Passwords do not match');
			return;
		}

		fetch('/api/updateuserpassword', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ id, newPassword }),
		})
		.then(response => response.json())
		.then(data => {
			if (data.success) {
				alert('Password updated successfully');
				window.location.reload();
			} else {
				alert('Failed to update password');
			}
		})
		.catch((error) => {
			console.error('Error:', error);
			alert('Failed to update password');
		});
	});
});


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