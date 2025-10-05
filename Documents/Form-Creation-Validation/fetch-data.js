// Async function to fetch and display user data from the public API
async function fetchUserData() {
	const apiUrl = 'https://jsonplaceholder.typicode.com/users';
	const dataContainer = document.getElementById('api-data');

	if (!dataContainer) {
		console.error('No element with id "api-data" found in the document.');
		return;
	}

	try {
		const response = await fetch(apiUrl);
		if (!response.ok) {
			throw new Error(`Network response was not ok (status: ${response.status})`);
		}

		const users = await response.json();

		// Clear loading message
		dataContainer.innerHTML = '';

		// Create and populate the user list
		const userList = document.createElement('ul');
		users.forEach(user => {
			const li = document.createElement('li');
			li.textContent = user.name;
			userList.appendChild(li);
		});

		dataContainer.appendChild(userList);
	} catch (error) {
		// Clear any existing content and show an error message
		dataContainer.innerHTML = '';
		dataContainer.textContent = 'Failed to load user data.';
		console.error('Error fetching user data:', error);
	}
}

// Invoke fetchUserData when the DOM has fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
