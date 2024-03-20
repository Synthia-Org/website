function navmenuHTML() {
	var html = `
		<div class="flex flexCol" style="height: 90%; width: 90%; align-items: center; justify-content: space-between;">
			<div class="flex flexCol" style="width: 90%; align-items: center; gap: 10px;">
				<a href="/chat" class="flex flexRow" id="chatMenuLink">
					<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message-2" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
						<path d="M8 9h8" />
						<path d="M8 13h6" />
						<path d="M9 18h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-3l-3 3l-3 -3z" />
					</svg>

					Assistant
				</a>

				<a href="/entertainment" class="flex flexRow" id="entertainmentMenuLink">
					<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
						<path d="M7 4v16l13 -8z" />
					</svg>

					Entertainment
				</a>

				<a href="/games" class="flex flexRow" id="gamesMenuLink">
					<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-gamepad-3" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
						<path d="M10 12l-3 -3h-2a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1h2l3 -3z" />
						<path d="M14 12l3 -3h2a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-2l-3 -3z" />
						<path d="M12 14l-3 3v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1 -1v-2l-3 -3z" />
						<path d="M12 10l-3 -3v-2a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v2l-3 3z" />
					</svg>

					Games
				</a>

				<a href="/resources" class="flex flexRow" id="resourcesMenuLink">
					<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-notebook" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
						<path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />
						<path d="M13 8l2 0" />
						<path d="M13 12l2 0" />
					</svg>

					Resources
				</a>
			</div>

			<div class="flex flexCol" style="width: 90%; align-items: center; gap: 10px;">
				<a href="/settings" class="flex flexRow" id="settingsMenuLink">
					<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
						<path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
						<path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
					</svg>

					Settings
				</a>

				<a href="/help" class="flex flexRow" id="helpMenuLink">
					<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-help" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
						<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
						<path d="M12 17l0 .01" />
						<path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
					</svg>

					Help & Feedback
				</a>
			</div>
		</div>
	`;
	return html;
}

var container = document.getElementById('navmenu');
container.innerHTML = navmenuHTML();



// ACTIVE PAGE MENU INDICATOR
var chatURL = 'http://localhost:3000/chat';
var entertainmentURL = 'http://localhost:3000/entertainment';
var gamesURL = 'http://localhost:3000/games';
var resourcesURL = 'http://localhost:3000/resources';
var settingsURL = 'http://localhost:3000/settings';
var helpURL = 'http://localhost:3000/help';

var currentURL = window.location.href;

const chatMenuLink = document.getElementById('chatMenuLink');
const entertainmentMenuLink = document.getElementById('entertainmentMenuLink');
const gamesMenuLink = document.getElementById('gamesMenuLink');
const resourcesMenuLink = document.getElementById('resourcesMenuLink');
const settingsMenuLink = document.getElementById('settingsMenuLink');
const helpMenuLink = document.getElementById('helpMenuLink');

if (currentURL.startsWith(chatURL)) {
	chatMenuLink.classList.add('navLinkActive');
} else {
	chatMenuLink.classList.add('navLink');
}

if (currentURL.startsWith(entertainmentURL)) {
	entertainmentMenuLink.classList.add('navLinkActive');
} else {
	entertainmentMenuLink.classList.add('navLink');
}

if (currentURL.startsWith(gamesURL)) {
	gamesMenuLink.classList.add('navLinkActive');
} else {
	gamesMenuLink.classList.add('navLink');
}

if (currentURL.startsWith(resourcesURL)) {
	resourcesMenuLink.classList.add('navLinkActive');
} else {
	resourcesMenuLink.classList.add('navLink');
}

if (currentURL.startsWith(settingsURL)) {
	settingsMenuLink.classList.add('navLinkActive');
} else {
	settingsMenuLink.classList.add('navLink');
}

if (currentURL.startsWith(helpURL)) {
	helpMenuLink.classList.add('navLinkActive');
} else {
	helpMenuLink.classList.add('navLink');
}