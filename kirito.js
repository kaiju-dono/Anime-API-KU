const contactsDIV = document.getElementById('char_list');

let tempCharHTML = `
<div class="col-4 text-success lead" style="width:250px;height:599px">
	<div class="card border border-5 border-danger bg-warning" style="width: auto; height: auto">
		<img style="height:336px" src="./char_images/kirito.jpg" class="card-img-top">
	<div class="card-body">
		<h5 class="card-title">Kazuto Kirigaya</h5>
		</div>
		<div id="buttonTag">
		<button id="kiritoButton" onClick="vote2();this.disabled=true">Click to VOTE!</button>
		<p>Votes: <a id="kiritoClicks">${kiritoClicks}</a></p>
		</div>
		<textarea style="height: 107px;">Kirigaya Kazuto (桐ヶ谷 和人 Kazuto Kirigaya), born as Narusaka Kazuto (鳴坂 和人 Kazuto Narusaka), and known as Kirito (キリト) in «Sword Art Online» (SAO), «ALfheim Online» (ALO), «Gun Gale Online» (GGO), and «Project Alicization», is the protagonist of the main Sword Art Online series.
		</textarea>
</div>

`

contactsDIV.innerHTML += tempCharHTML;