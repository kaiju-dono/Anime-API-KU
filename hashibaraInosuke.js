const contactsDIV = document.getElementById('char_list');

let counter = 1-1;
let tempCharHTML = `
<div class="col-auto text-success lead" style="width:233px;height:200px">
	<div class="card border border-5 border-danger bg-warning" style="width: auto; height: auto">
		<img style="width: 200px; height: 252.317px" src="./char_images/hashibaraInosuke.jpg" class="card-img-top">
	<div class="card-body">
		<h5 class="card-title">Hashibara Ionosuke</h5>
		</div>
		<div id="buttonTag">
		<button id="button" onClick="vote3()">Click to VOTE!</button>
		<p>Votes: <a id="clicks3">${clicks3}</a></p>
		</div>
</div>

`

contactsDIV.innerHTML += tempCharHTML;