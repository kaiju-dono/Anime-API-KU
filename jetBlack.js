fetch("https://jikan1.p.rapidapi.com/character/3/pictures", {
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
		<img src="${pics[2].image_url}" class="card-img-top">
	  <div class="card-body">
		<h5 class="card-title">Jet Black</h5>
	  </div>
		<div>
		<button id="button" onClick="vote3()">Click to Vote!</button>
		<p>Votes: <a id="clicks3">${clicks3}</a></p>
		</div>
		<textarea style="height: 107px;">Jet Black  is an officer of the ISSP and later bounty hunter. He partnered with Fad until losing his arm in the mid-2060s. He then captained the Bebop and led a bounty-hunting crew including Spike Spiegel, Faye Valentine, and Edward.
		</textarea>
	</div>
	
	`

	contactsDIV.innerHTML += tempCharHTML;
})
.catch(err => {
	console.error(err);
});