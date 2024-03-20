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


// Fetch User Info Functionality
function fetchUserInfo() {
	return fetch('/api/loggedin-userinfo')
	.then(response => response.json())
	.then(data => {
		var id = data.userid;

		var name = data.name;
		existingNameSpan.textContent = name;

		var email = data.email;
		existingEmailSpan.textContent = email;
	})
	.catch(error => {
		console.error('Error:', error);
	});
};
fetchUserInfo();


// Update User Name Functionality
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


// Update User Email Functionality
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


// Update User Password Functionality
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


// Logout Functionality
logoutBtn.addEventListener('click', () => {
	fetch('/logout')
	.then(response => {
		window.location.href = '/login';
	})
	.catch(error => {
		console.error('Error:', error);
	});
});