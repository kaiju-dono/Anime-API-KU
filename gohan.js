const contactsDIV = document.getElementById('char_list');

let counter = 1-1;
let tempCharHTML = `
<div class="col-4 text-success lead" style="width:233px;height:200px">
	<div class="card border border-5 border-danger bg-warning" style="width: auto; height: auto">
		<img style="width: auto; height: 252.317px" src="./char_images/gohan.jpg" class="card-img-top">
	<div class="card-body">
		<h5 class="card-title">Gohan</h5>
		</div>
		<div id="buttonTag">
		<button id="button" onClick="vote2()">Click to VOTE!</button>
		<p>Votes: <a id="clicks2">${clicks2}</a></p>
		</div>
</div>

`

contactsDIV.innerHTML += tempCharHTML;
