const entertainmentContainer = document.getElementById('entertainmentContainer');

// Fetch the Entertainment from the API
fetch('/api/getEntertainment')
	.then(response => response.json())
	.then(data => {
		// Loop through each item in the data
		data.forEach(entertainment => {
			// Create the HTML for the item
			var entertainmentItemHTML = `
				<div class="flex entertainmentCard" title="Play ${entertainment.title}" data-entertainment="${entertainment.id}" data-url="${entertainment.url}">
					<div class="flex flexCol card" style="gap: 10px;">
						<div class="cardImage" style="height: 190px; width: 190px; background: url('${entertainment.image}'); background-size: cover; background-position: center; border-radius: 5px;" data-image="${entertainment.image}"></div>
						<div class="cardTitle" data-title="${entertainment.title}">${entertainment.title}</div>
					</div>
				</div>
			`;

			// Append the item HTML to the container
			entertainmentContainer.innerHTML += entertainmentItemHTML;
		});
	})
	.catch(error => console.error('Error:', error));