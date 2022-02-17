const contactsDIV = document.getElementById('char_list');

let counter = 1-1;
let tempCharHTML = `
<div class="col-4 text-success lead" style="width:233px;height:200px">
	<div class="card border border-5 border-danger bg-warning" style="width: auto; height: auto">
		<img style="width: 200px; height: 252.317px" src="./char_images/kamadoTanjiro.jpg" class="card-img-top">
	<div class="card-body">
		<h5 class="card-title">Kamado Tanjiro</h5>
		</div>
		<div id="buttonTag">
		<button id="button" onClick="vote()">Click to VOTE!</button>
		<p>Votes: <a id="clicks">${clicks}</a></p>
		</div>
		<textarea style="height: 107px;">Tanjiro Kamado (竈門かまど 炭たん治じ郎ろう Kamado Tanjirō?) is the main protagonist of Demon Slayer: Kimetsu no Yaiba. He is a Demon Slayer in the Demon Slayer Corps, who joined to find a remedy to turn his sister, Nezuko Kamado, back into a human and to hunt down and kill demons, and later swore to defeat Muzan Kibutsuji, the King of Demons, in order to prevent others from suffering the same fate as him.</textarea>
</div>

`

contactsDIV.innerHTML += tempCharHTML;