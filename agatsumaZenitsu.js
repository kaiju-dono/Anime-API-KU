const contactsDIV = document.getElementById('char_list');

let tempCharHTML = `
<div class="col-auto text-success lead" style="width:250px;height:599px">
	<div class="card border border-5 border-danger bg-warning" style="width: auto; height: auto">
		<img style="width: auto; height: 336px" src="./char_images/agatsumaZenitsu.jpg" class="card-img-top">
	<div class="card-body">
		<h5 class="card-title">Agatsuma Zenitsu</h5>
		</div>
		<div id="buttonTag">
		<button id="zenitsuButton" onClick="vote4()">Click to VOTE!</button>
		<p>Votes: <a id="zenitsuClicks">${zenitsuClicks}</a></p>
		</div>
		<textarea style="height: 107px;">Zenitsu Agatsuma is one of the main protagonists of Demon Slayer: Kimetsu no Yaiba and along with Inosuke Hashibira, a travelling companion of Tanjiro Kamado and Nezuko Kamado. He is also a Demon Slayer in the Demon Slayer Corps.</textarea>
</div>

`

contactsDIV.innerHTML += tempCharHTML;