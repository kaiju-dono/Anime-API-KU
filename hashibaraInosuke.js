const contactsDIV = document.getElementById('char_list');

let tempCharHTML = `
<div class="col-auto text-success lead" style="width:270px;height:599px">
	<div class="card border border-5 border-danger bg-warning" style="width: auto; height: auto">
		<img style="width: auto; height: 336px" src="./char_images/hashibaraInosuke.jpg" class="card-img-top">
	<div class="card-body">
		<h5 class="card-title">Hashibara Ionosuke</h5>
		</div>
		<div id="buttonTag">
		<button id="inosukeButton" onClick="vote3()">Click to VOTE!</button>
		<p>Votes: <a id="inosukeClicks">${inosukeClicks}</a></p>
		</div>
		<textarea style="height: 107px;">Inosuke Hashibira is one of the main protagonists of Demon Slayer: Kimetsu no Yaiba and along with Zenitsu Agatsuma, a traveling companion of Tanjiro Kamado and Nezuko Kamado. He is also a Demon Slayer in the Demon Slayer Corps.</textarea>
</div>

`

contactsDIV.innerHTML += tempCharHTML;