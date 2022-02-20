fetch("https://jikan1.p.rapidapi.com/character/1/pictures", {
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
	<div class="col-4 text-success lead" style="width:250px;height:599px">
	  <div class="card border border-5 border-danger bg-warning" style="width: auto; height: auto">
		<img src="${pics[0].image_url}" class="card-img-top">
	  <div class="card-body">
		<h5 class="card-title">Spike Spiegel</h5>
	  </div>
		<div>
		<button id="spikeButton" onClick="vote2()">Click to Vote!</button>
		<p>Votes: <a id="spikeClicks">${spikeClicks}</a></p>
		</div>
		<textarea style="height: 107px;">Spike Spiegel is a former member of the Red Dragon Crime Syndicate, who left by faking his death after falling in love with a woman called Julia.</textarea>
	</div>
	
	`

	contactsDIV.innerHTML += tempCharHTML;
})
.catch(err => {
	console.error(err);
});