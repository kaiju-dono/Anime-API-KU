const contactsDIV = document.getElementById('char_list');

let counter = 1-1;
let tempCharHTML = `
<div class="col-4 text-success lead" style="width:233px;height:200px">
	<div class="card border border-5 border-danger bg-warning" style="width: auto; height: auto">
		<img style="width: 200px; height: 252.317px" src="./char_images/goku.jpg" class="card-img-top">
	<div class="card-body">
		<h5 class="card-title">Goku</h5>
		</div>
		<div id="buttonTag">
		<button id="button" onClick="vote()">Click to VOTE!</button>
		<p>Votes: <a id="clicks">${clicks}</a></p>
		</div>
		<textarea style="height: 107px;">Son Goku , born Kakarot (カカロット Kakarotto), is the main protagonist of the Dragon Ball series. Goku is a Saiyan male originally sent to destroy Earth as an infant. A head injury at an early age alters his memory, ridding him of his initial destructive nature and allowing him to grow up to become one of Earth's greatest defenders. He constantly strives and trains to be the greatest warrior possible, which has kept the Earth and the universe safe from destruction many times.</textarea>
</div>

`

contactsDIV.innerHTML += tempCharHTML;
