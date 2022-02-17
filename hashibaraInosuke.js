const contactsDIV = document.getElementById('char_list');

let counter = 1-1;
let tempCharHTML = `
<div class="col-auto text-success lead" style="width:250px;height:599px">
	<div class="card border border-5 border-danger bg-warning" style="width: auto; height: auto">
		<img style="width: 200px; height: 252.317px" src="./char_images/hashibaraInosuke.jpg" class="card-img-top">
	<div class="card-body">
		<h5 class="card-title">Hashibara Ionosuke</h5>
		</div>
		<div id="buttonTag">
		<button id="button" onClick="vote3()">Click to VOTE!</button>
		<p>Votes: <a id="clicks3">${clicks3}</a></p>
		</div>
		<textarea style="height: 107px;">Inosuke Hashibira is one of the main protagonists of Demon Slayer: Kimetsu no Yaiba and along with Zenitsu Agatsuma, a traveling companion of Tanjiro Kamado and Nezuko Kamado. He is also a Demon Slayer in the Demon Slayer Corps.</textarea>
</div>

`

contactsDIV.innerHTML += tempCharHTML;