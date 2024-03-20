const resourcesContainer = document.getElementById('resourcesContainer');

// Fetch the Resources from the API
fetch('/api/getResources')
	.then(response => response.json())
	.then(data => {
		// Loop through each item in the data
		data.forEach(resource => {
			// Create the HTML for the item
			var resourceItemHTML = `
				<a href="/resources/${resource.url}" class="flex" style="text-decoration: none;" title="${resource.title}">
					<div class="flex flexCol card" style="gap: 10px;">
						<div class="cardImage" style="height: 190px; width: 330px; background: url('${resource.image}'); background-size: cover; background-position: center; border-radius: 5px;"></div>
						<div class="cardTitle" style="width: 330px;">${resource.title}</div>
					</div>
				</a>
			`;

			// Append the item HTML to the container
			resourcesContainer.innerHTML += resourceItemHTML;
		});
	})
	.catch(error => console.error('Error:', error));