fetch("https://jikan1.p.rapidapi.com/character/2/pictures", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "jikan1.p.rapidapi.com",
		"x-rapidapi-key": "1351ea00bdmshf176319cd6f17e7p19b0dajsn32c677b31fed"
	}
})
.then(response => {
	return response.json();
})
.then(data => {
	// console.log(data)
	const contactsDIV = document.getElementById('char_list');
    const pics = data.pictures;
	console.log(pics)
	let tempCharHTML = `
	<div class="col-4 text-success lead" style="width:200px;height:200px">
	  <div class="card border border-5 border-danger bg-warning" style="width: auto; height: auto">
		<img src="${pics[1].image_url}" class="card-img-top">
	  <div class="card-body">
		<h5 class="card-title">Faye Valentine</h5>
	  </div>
		<div>
		<button id="button" onClick="vote()">Click to Vote!</button>
		<p>Votes: <a id="clicks">${clicks}</a></p>
		</div>
	</div>
	<textarea style="height: 107px;">Faye Valentine is a wanted bounty head and a member of the bounty hunting crew aboard the Bebop.</textarea>
	
	`

	contactsDIV.innerHTML += tempCharHTML;
})
.catch(err => {
	console.error(err);
});