const search = document.getElementById('search-btn');
const find = document.getElementById('find-btn');
const ordersContainer = document.getElementById('order-container');


//Render Returned Item On DOM
function renderDOM(data){
	data.forEach(element => {
		if(element.name){
			//Div Container For Each Item
			let itemContainer = document.createElement("DIV");
			let header = document.createElement("H1")  
			let headerText = document.createTextNode(element.name);
			header.appendChild(headerText);
			itemContainer.appendChild(header);
			if(element.description){
				let paragraph = document.createElement("p");
				let description = document.createTextNode(element.description);
				paragraph.appendChild(description);
				itemContainer.classList.add("item-conainer"); //Add Class To Use CSS
				itemContainer.appendChild(paragraph);
			}	
			ordersContainer.appendChild(itemContainer);
		}
	});
}

//Search Database For Certain Item
search.addEventListener('click', (event) => {
	event.preventDefault();
	var formData = new FormData(form);
	const name = formData.get('name');
	form.reset();
	//Empty Box
	if(!name)
		console.log('No Input');
	else {
		fetch('http://127.0.0.1:8000/orders', {
			method: 'POST', 
	  		mode: 'cors',
	    	cache: 'no-cache',
	  		headers: {
	    		'Content-Type': 'application/json',
  			},
  			body: JSON.stringify({
  				name: name
  			})
		})
		.then(response => response.json())
		.then(data => {
			if(data.length > 0)
				renderDOM(data);
			else
				alert('No Such Order');
		})
		.catch(err => console.log(err));
	}
});


//Display All Items
find.addEventListener('click', (event) => {
	event.preventDefault();
	fetch('http://127.0.0.1:8000/orders/all')
		.then(response => response.json())
		.then(data => {
			if(data.length > 0)
				renderDOM(data);
			else
				alert('No Such Order');
		})
		.catch(err => console.log(err));
});