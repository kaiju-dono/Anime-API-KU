var obj;
fetch("https://jikan1.p.rapidapi.com/character/55/pictures", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "jikan1.p.rapidapi.com",
		"x-rapidapi-key": "1351ea00bdmshf176319cd6f17e7p19b0dajsn32c677b31fed"
	}
})
.then(response => {
	return response.json();
})
.then(data => obj = data)
.then(() => console.log(obj))
.catch(err => {
	console.error(err);
});


if (!obj) {
const contactsDIV = document.getElementById('char_list');

let tempCharHTML = `
<div class="col-4 text-success lead" style="width:250px;height:599px">
	<div class="card border border-5 border-danger bg-warning" style="width: auto; height: auto">
		<img style="width: auto; height: 336px" src="./char_images/kamadoTanjiro.jpg" class="card-img-top">
	<div class="card-body">
		<h5 class="card-title">Kamado Tanjiro</h5>
		</div>
		<div id="buttonTag">
		<button id="button" onClick="vote()">Click to VOTE!</button>
		<p>Votes: <a id="jetClicks">${jetClicks}</a></p>
		</div>
		<textarea style="height: 107px;">Tanjiro Kamado (竈門かまど 炭たん治じ郎ろう Kamado Tanjirō?) is the main protagonist of Demon Slayer: Kimetsu no Yaiba. He is a Demon Slayer in the Demon Slayer Corps, who joined to find a remedy to turn his sister, Nezuko Kamado, back into a human and to hunt down and kill demons, and later swore to defeat Muzan Kibutsuji, the King of Demons, in order to prevent others from suffering the same fate as him.</textarea>
</div>

`

contactsDIV.innerHTML += tempCharHTML;
}