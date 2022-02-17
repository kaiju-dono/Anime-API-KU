fetch("https://jikan1.p.rapidapi.com/character/5/pictures", {
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
	  <div class="card border border-5 border-danger bg-warning" style="width: auto; height:auto;">
		<img src="${pics[0].image_url}" class="card-img-top">
	  <div class="card-body">
		<h5 class="card-title">Ichigo Kurosaki</h5>
	  </div>
		<div>
		<button id="button" onClick="vote()">Click to Vote!</button>
		<p>Votes: <a id="ichigoClicks">${ichigoClicks}</a></p>
		</div>
		<textarea style="height: 107px;">Ichigo Kurosaki is a Human who is also a Substitute Shinigami. Ichigo is the son of Isshin and Masaki Kurosaki, and older brother of Karin and Yuzu. He is also married to Orihime Inoue and has a son named Kazui Kurosaki.</textarea>
	</div>
	
	`

	contactsDIV.innerHTML += tempCharHTML;
})
.catch(err => {
	console.error(err);
});