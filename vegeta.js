const contactsDIV = document.getElementById('char_list');

let counter = 1-1;
let tempCharHTML = `
<div class="col-4 text-success lead" style="width:258px;height:599px">
	<div class="card border border-5 border-danger bg-warning" style="width: auto; height: auto">
		<img style="width: 224px; height: 336px" src="./char_images/vegeta.jpg" class="card-img-top">
	<div class="card-body">
		<h5 class="card-title">Vegeta</h5>
		</div>
		<div id="buttonTag">
		<button id="button" onClick="vote3()">Click to VOTE!</button>
		<p>Votes: <a id="clicks3">${clicks3}</a></p>
		</div>
		<textarea style="height: 107px;">Regal, egotistical, and full of pride, Vegeta was once a ruthless, cold-blooded warrior and outright killer,[8] but later abandons his role in the Frieza Force, instead opting to remain and live on Earth. His character evolves from villain, to anti-hero, then to hero through the course of the series, repeatedly fighting alongside the universe's most powerful warriors in order to protect his new home and surpass Goku in power.</textarea>
</div>

`

contactsDIV.innerHTML += tempCharHTML;
