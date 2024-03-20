const gamesContainer = document.getElementById('gamesContainer');

// Fetch the Games from the API
fetch('/api/getGames')
	.then(response => response.json())
	.then(data => {
		// Loop through each item in the data
		data.forEach(game => {
			// Create the HTML for the item
			var gameItemHTML = `
				<a href="${game.url}" class="flex" style="text-decoration: none;" title="Play ${game.title}">
					<div class="flex flexCol card" style="gap: 10px;">
						<div class="cardImage" style="height: 190px; width: 190px; background: url('${game.image}'); background-size: cover; background-position: center; border-radius: 5px;"></div>
						<div class="cardTitle">${game.title}</div>
					</div>
				</a>
			`;

			// Append the item HTML to the container
			gamesContainer.innerHTML += gameItemHTML;
		});
	})
	.catch(error => console.error('Error:', error));