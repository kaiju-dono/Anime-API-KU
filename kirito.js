const contactsDIV = document.getElementById('char_list');

let counter = 1-1;
let tempCharHTML = `
<div class="col-4 text-success lead" style="width:200px;height:200px">
	<div class="card border border-5 border-danger bg-warning" style="width: auto; height: auto">
		<img src="./char_images/kirito.jpg" class="card-img-top">
	<div class="card-body">
		<h5 class="card-title">Kazuto Kirigaya</h5>
		</div>
		<div id="buttonTag">
		<button id="kiritoButton" onClick="vote2()">Click to VOTE!</button>
		<p>Votes: <a id="clicks2">${clicks2}</a></p>
		</div>
		<h3>Kirigaya Kazuto (桐ヶ谷 和人 Kazuto Kirigaya), born as Narusaka Kazuto (鳴坂 和人 Kazuto Narusaka), and known as Kirito (キリト) in «Sword Art Online» (SAO), «ALfheim Online» (ALO), «Gun Gale Online» (GGO), and «Project Alicization», is the protagonist of the main Sword Art Online series.
		</h3>
</div>

`

contactsDIV.innerHTML += tempCharHTML;