const chatForm = document.getElementById('chatForm');
var messageInput = document.getElementById('messageInput');
const submitBtn = document.getElementById('submitBtn');
let responsesDiv = document.getElementById('responsesDiv');
var botResponse = document.querySelector('.botResponse');
const scrollContainer = document.getElementById('scrollContainer');

chatForm.addEventListener('submit', function (event) {
	event.preventDefault();

	if (messageInput.value.trim() === '' || messageInput.value.trim() === ' ') {
		return false;
	}

	let myResponseDiv = document.createElement('div');
	myResponseDiv.innerHTML = `
		<div class="myResponseText">
			${messageInput.value}
		</div>
	`;

	responsesDiv.appendChild(myResponseDiv);

	fetch('http://localhost:5005/webhooks/rest/webhook', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			sender: 'test_user',
			message: messageInput.value
		}),
	})
		.then(response => response.json())
		.then(data => {
			let botResponseDiv = document.createElement('div');
			botResponseDiv.innerHTML = `
				<div class="botResponseText">
					${data[0].text}
				</div>
			`;

			responsesDiv.appendChild(botResponseDiv);
			messageInput.value = '';

			scrollContainer.scrollTop = scrollContainer.scrollHeight;
		})
		.catch(() => {
			console.log('Error while sending message to bot');
			scrollContainer.scrollTop = scrollContainer.scrollHeight;
		});
});