const feedbackForm = document.getElementById('feedbackForm');
const formEmail = document.getElementById('formEmail');
const submitStateMsg = document.getElementById("submitStateMsg");

window.addEventListener("load", function () {
	feedbackForm.addEventListener("submit", function (e) {
		e.preventDefault();
		const data = new FormData(feedbackForm);
		const action = e.target.action;

		submitStateMsg.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i>Please wait!';

		fetch(action, {
			method: 'POST',
			body: data,
		})

		.then(() => {
			feedbackForm.reset();
			submitStateMsg.innerHTML = '<i class="fa-solid fa-circle-check"></i>Your message has been sent!';
			setTimeout(() => {
				submitStateMsg.innerHTML = '';
			}, 3000);
			fetchUserEmail();
		})

		.catch(() => {
			submitStateMsg.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>Oops! Something went wrong. Please try again!';
			setTimeout(() => {
				submitStateMsg.innerHTML = '';
			}, 3000);
		});
	});
});

function fetchUserEmail() {
	fetch('/api/loggedin-userinfo')
		.then(response => response.json())
		.then(data => {
			if (data.email === "" || data.email === null || data.email === undefined) {
				formEmail.value = "";
			} else {
				formEmail.value = data.email;
				formEmail.readOnly = true;
				formEmail.style.userSelect = "none";
			}
		});
}
fetchUserEmail();