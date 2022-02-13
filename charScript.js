
fetch("https://animi.p.rapidapi.com/name?name=Levi", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "animi.p.rapidapi.com",
		"x-rapidapi-key": "a4ca4ca3e2msh9818f03913b4bd3p17658fjsn91e19c2cb703"
	}
})
.then(response => {
    return response
})
.then(data => {
    const contactsDIV = document.getElementById('char_list');
    
	let tempCharHTML = `
	<div class="col-4 text-success lead">
	  <div class="card border border-5 border-danger bg-warning" style="width: 18rem;">
		<img src="${person.anime_img}" class="card-img-top">
	  <div class="card-body">
		<h5 class="card-title">${person.anime_name}</h5>
	  </div>
	
	</div>
	`

	contactsDIV.innerHTML += tempCharHTML;
})
.catch(err => {
	console.error(err);
})
