const chatForm = document.getElementById('chat-form');
var messageInput = document.getElementById('message-input');
const submitBtn = document.getElementById('submitBtn');
const submitIcon = document.getElementById('submitIcon');
let responsesDiv = document.getElementById('responsesDiv');
var botResponse = document.querySelector('.botResponse');
const scrollContainer = document.getElementById('scrollContainer');
const startMsg = document.getElementById('startMsg');
const clearChatBtn = document.getElementById('clearChatBtn');



chatForm.addEventListener('submit', function (event) {
	event.preventDefault();

	if (messageInput.value.trim() === '' || messageInput.value.trim() === ' ') {
		return false;
	}

	let myResponseDiv = document.createElement('div');
	myResponseDiv.classList = 'myResponseCard flex flexRow';
	myResponseDiv.style = 'width: 100%; align-items: center;';
	myResponseDiv.innerHTML = `
		<div class="flex" style="width: 70px; height: 100%; align-items: center; justify-content: start;">
			<img style="width: 30px; height: auto; border-radius: 4px;" src="/assets/ui/userIcon.png">
		</div>
		<div class="myResponseText" style="height: auto; width: calc(100% - 70px); color: #CCCCCC; background: #333333; line-height: 1.5; font-weight: 300; font-size: 14px; text-align: justify; text-align-last: left; word-break: break-word; padding: 30px 30px; border-radius: 8px;">
			${messageInput.value}
		</div>
	`;

	responsesDiv.appendChild(myResponseDiv);

	startMsgStatus();

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
			botResponseDiv.classList = 'botResponseCard flex flexRow';
			botResponseDiv.style = 'width: 100%; align-items: center;';
			botResponseDiv.innerHTML = `
				<div class="flex" style="width: 70px; height: 100%; align-items: center; justify-content: start;">
					<img style="width: 30px; height: auto; border-radius: 4px;" src="/assets/ui/botIcon.png">
				</div>
				<div class="botResponseText" style="height: auto; width: calc(100% - 70px); color: #CCCCCC; background: #2C2C2C; line-height: 1.5; font-weight: 300; font-size: 14px; text-align: justify; text-align-last: left; word-break: break-word; padding: 30px 30px; border-radius: 8px;">
					${data[0].text}
				</div>
			`;

			responsesDiv.appendChild(botResponseDiv);
			messageInput.value = '';

			saveResponses();
			changeSubmitBtnColor();
			changeClearChatBtnColor();

			scrollContainer.scrollTop = scrollContainer.scrollHeight;
		})
		.catch(() => {
			console.log('Error fetching data from server');

			scrollContainer.scrollTop = scrollContainer.scrollHeight;
		});
});


function startMsgStatus() {
	if (responsesDiv.innerHTML === '') {
		startMsg.style.display = 'flex';
	} else if (responsesDiv.innerHTML !== localStorage.getItem('responsesDiv') || responsesDiv.innerHTML !== '') {
		startMsg.style.display = 'none';
	}
}


function changeSubmitBtnColor() {
	if (messageInput.value.trim() === '' || messageInput.value.trim() === ' ') {
		submitIcon.style.opacity = '0.5';
		submitBtn.style.cursor = 'not-allowed';
		submitBtn.style.transition = '0.3s';
	} else {
		submitIcon.style.opacity = '1';
		submitBtn.style.cursor = 'pointer';
		submitBtn.style.transition = '0.3s';
	}
}

function changeClearChatBtnColor() {
	if (responsesDiv.innerHTML === '' || localStorage.getItem('responsesDiv') === '') {
		clearChatBtn.title = 'Chat is already empty';
		clearChatBtn.style.opacity = '0.5';
		clearChatBtn.style.cursor = 'not-allowed';
		clearChatBtn.style.transition = '0.3s';
	} else {
		clearChatBtn.title = 'Clear Chat';
		clearChatBtn.style.opacity = '1';
		clearChatBtn.style.cursor = 'pointer';
		clearChatBtn.style.transition = '0.3s';
	}
}


messageInput.addEventListener('input', () => {
	changeSubmitBtnColor();
});

clearChatBtn.addEventListener('click', () => {
	clearChat();
});


function saveResponses() {
	localStorage.setItem('responsesDiv', responsesDiv.innerHTML);
}

function loadResponses() {
	responsesDiv.innerHTML = localStorage.getItem('responsesDiv');
	scrollContainer.scrollTop = scrollContainer.scrollHeight;
}

function clearChat() {
	if (responsesDiv.innerHTML === '') {
		return false;
	} else {
		if (confirm('Are you sure you want to clear the chat? this action is irreversible!')) {
			responsesDiv.innerHTML = '';
			localStorage.removeItem('responsesDiv');
			saveResponses();
			window.location.reload();
		} else {
			return false;
		}
	}
}


setInterval(() => {
	startMsgStatus();
}, 2000);


window.addEventListener('load', () => {
	startMsgStatus();
	loadResponses();
	changeSubmitBtnColor();
	changeClearChatBtnColor();
});