var firstLetter;
var iconTitle;

function menubarHTML() {
	var html = `
		<div style="height: 100%; width: 95%; display: flex; flex-direction: row; align-items: center; justify-content: space-between;">
			<div>
				<span style="display: flex; flex-direction: row; gap: 20px; align-items: center;">
					<a href="/" class="flex flexRow" style="font-size: 24px; color: #ECECEC; text-decoration: none; opacity: 1; align-items: start; gap: 5px;">
						Synthia

						<span style="font-size: 10px; font-weight: 500; padding: 2px 4px; color: #FFFFFF; background: #3790D0; border-radius: 4px; opacity: 1;">
							BETA
						</span>
					</a>
				</span>
			</div>

			<div style="user-select: none;" title="${iconTitle}">
				<div style="height: 35px; width: 35px;">
					<div style="height: 100%; width: 100%; color: #ECECEC; background: ${guestColor}; display: flex; justify-content: center; align-items: center; border-radius: 5px;">${firstLetter}</div>
				</div>
			</div>
		</div>
	`;
	return html;
}

// fetch name from /loggedin-userinfo and save it to a variable
function fetchUserInfo() {
	fetch('/api/loggedin-userinfo')
		.then(response => response.json())
		.then(data => {
			var name = data.name;
			if (name === undefined) {
				name = 'Guest';
				guestColor = '#424242';
				iconTitle = 'Guest';
			} else {
				guestColor = '#D85E0C';
				iconTitle = name;
			};
			// remove double quotes from name
			name = name.replace(/"/g, '');
			console.log(name);
			firstLetter = name.charAt(0).toUpperCase();
			var container = document.getElementById('menubar');
			container.innerHTML = menubarHTML();
		})
		.catch(error => {
			console.error('Error:', error);
		});
};

fetchUserInfo();