const contactsDIV = document.getElementById('char_list');

let tempCharHTML = `
<div class="col-4 text-success lead" style="width:250px;height:599px">
	<div class="card border border-5 border-danger bg-warning" style="width: auto; height: auto">
		<img src="./char_images/eugeo.jpg" class="card-img-top">
	<div class="card-body">
		<h5 class="card-title">Eugeo</h5>
		</div>
		<div id="buttonTag">
		<button id="eugeoButton" onClick="vote3();this.disabled=true">Click to VOTE!</button>
		<p>Votes: <a id="eugeoClicks">${eugeoClicks}</a></p>
		</div>
		<textarea style="height: 107px;">Eugeo (ユージオ, Yūjio?) was the deuteragonist of the first half of the Alicization Arc. Eugeo was a child born in a remote village in the Human Empire of Underworld, where he was assigned the Sacred Task of felling a giant tree with his childhood friend Kirito.</textarea>
</div>

`

contactsDIV.innerHTML += tempCharHTML;