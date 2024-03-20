var audioSrc = "https://stream.zeno.fm/0r0xa792kwzuv";
let audioState = "Paused";
var audioTitle = "Lofi";
var audioArtist = "Zeno FM";
var audioImage = "/assets/images/entertainment/lofi.png";


const audioPlayer = document.getElementById('audioPlayer');
const audioPlayerState = document.getElementById('audioPlayerState');
const audioPlayerImage = document.getElementById('audioPlayerImage');
const audioPlayerDetails = document.getElementById('audioPlayerDetails');
const playerPlayPauseBtn = document.getElementById('playerPlayPause');
const volumeSlider = document.getElementById('volumeSlider');

audioPlayer.src = audioSrc;
audioPlayerState.innerHTML = audioState;
audioPlayerImage.src = audioImage;
audioPlayerDetails.innerHTML = audioTitle;


// Play/Pause button
playerPlayPauseBtn.addEventListener('click', () => {
	if (audioPlayer.paused) {
		audioPlayer.play();
        audioPlayerState.innerText = "Playing";
		playerPlayPauseBtn.innerHTML = `
			<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-pause-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#3790D0" fill="none" stroke-linecap="round" stroke-linejoin="round">
				<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
				<path d="M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" stroke-width="0" fill="currentColor" />
				<path d="M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" stroke-width="0" fill="currentColor" />
			</svg>
		`;
	} else {
		audioPlayer.pause();
		audioPlayerState.innerText = "Paused";
		playerPlayPauseBtn.innerHTML = `
			<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#3790D0" fill="none" stroke-linecap="round" stroke-linejoin="round">
				<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
				<path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" stroke-width="0" fill="currentColor" />
			</svg>
		`;
	}
});


audioPlayer.addEventListener('play', () => {
	playerPlayPauseBtn.innerHTML = `
		<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-pause-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#3790D0" fill="none" stroke-linecap="round" stroke-linejoin="round">
			<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
			<path d="M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" stroke-width="0" fill="currentColor" />
			<path d="M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" stroke-width="0" fill="currentColor" />
		</svg>
	`;
});

audioPlayer.addEventListener('pause', () => {
	playerPlayPauseBtn.innerHTML = `
		<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#3790D0" fill="none" stroke-linecap="round" stroke-linejoin="round">
			<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
			<path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" stroke-width="0" fill="currentColor" />
		</svg>
	`;
});

// Update Volume
volumeSlider.addEventListener('input', () => {
    audioPlayer.volume = volumeSlider.value / 100;
});


// Add a click event listener to the entertainment container and update the audio player
entertainmentContainer.addEventListener('click', e => {
	// Check if the clicked element or its parent has the 'entertainmentCard' class
	const card = e.target.classList.contains('entertainmentCard') ? e.target : e.target.closest('.entertainmentCard');

	if (card) {
		// Get the data attributes of the clicked element
		audioSrc = card.getAttribute('data-url');
		audioTitle = card.getAttribute('data-title');
		audioImage = card.querySelector('.cardImage').style.backgroundImage.slice(5, -2); // Extract the URL from the 'background' style
		cardTitle = card.querySelector('.cardTitle');

		// Update the audio player
		audioPlayer.src = audioSrc;
		audioPlayerDetails.textContent = cardTitle.textContent;
		audioPlayerImage.src = audioImage;
		audioPlayer.play();

		// Update the audio state
		audioState = "Playing";
		audioPlayerState.textContent = audioState;
	}
});