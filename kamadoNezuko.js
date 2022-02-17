const contactsDIV = document.getElementById('char_list');

let counter = 1-1;
let tempCharHTML = `
<div class="col-auto text-success lead" style="width:250px;height:599px">
	<div class="card border border-5 border-danger bg-warning" style="width: auto; height: auto">
		<img style="width: auto; height: 336px" src="./char_images/kamadoNezuko.jpg" class="card-img-top">
	<div class="card-body">
		<h5 class="card-title">Kamado Tanjiro</h5>
		</div>
		<div id="buttonTag">
		<button id="button" onClick="vote2()">Click to VOTE!</button>
		<p>Votes: <a id="nezukoClicks">${nezukoClicks}</a></p>
		</div>
		<textarea style="height: 107px;">Nezuko Kamado is the deuteragonist of Demon Slayer: Kimetsu no Yaiba. She is a demon and the younger sister of Tanjiro Kamado and one of the two remaining members of the Kamado family. Formerly a human, she was attacked and turned into a demon by Muzan Kibutsuji.</textarea>
</div>

`

contactsDIV.innerHTML += tempCharHTML;