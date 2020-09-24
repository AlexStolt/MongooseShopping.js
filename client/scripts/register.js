const form = document.getElementById('form');
const submit = document.getElementById('submit');


submit.addEventListener('click', (event) => {
	event.preventDefault();
	let formData = new FormData(form);
	

	//Construct JSON File to Send
	fetch('http://127.0.0.1:8000/register', {
  		method: 'POST', 
  		mode: 'cors',
    	cache: 'no-cache',
  		headers: {
    		'Content-Type': 'application/json',
  		},
  		body: JSON.stringify({
  			name: formData.get('name'),
  			description: formData.get ('description')
  		}),
	})
	.then(response => response.json())
	.then(data => {
		if(!data.success){
			alert('Product Already Exists');
		}
	});
})
