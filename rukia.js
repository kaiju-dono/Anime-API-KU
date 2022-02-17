fetch("https://jikan1.p.rapidapi.com/character/6/pictures", {
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
		<img src="${pics[0].image_url}" class="card-img-top">
	  <div class="card-body">
		<h5 class="card-title">Rukia Kuchiki</h5>
	  </div>
		<div>
		<button id="button" onClick="vote3()">Click to Vote!</button>
		<p>Votes: <a id="clicks3">${clicks3}</a></p>
		</div>
		<textarea style="height: 107px;">Rukia Kuchiki is the current captain of the 13th Division. She formerly served as lieutenant of the 13th Division under Captain Jūshirō Ukitake. Rukia is the adoptive sister of Byakuya Kuchiki, a friend of Ichigo Kurosaki, and is married to Renji Abarai.</textarea>
	</div>
	
	`

	contactsDIV.innerHTML += tempCharHTML;
})
.catch(err => {
	console.error(err);
});