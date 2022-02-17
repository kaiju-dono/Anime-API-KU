const contactsDIV = document.getElementById('char_list');

let counter = 1-1;
let tempCharHTML = `
<div class="col-4 text-success lead" style="width:258px;height:599px">
	<div class="card border border-5 border-danger bg-warning" style="width: auto; height: auto">
		<img style="width: 224px; height: 336px" src="./char_images/gohan.jpg" class="card-img-top">
	<div class="card-body">
		<h5 class="card-title">Gohan</h5>
		</div>
		<div id="buttonTag">
		<button id="button" onClick="vote2()">Click to VOTE!</button>
		<p>Votes: <a id="clicks2">${clicks2}</a></p>
		</div>
		<textarea style="height: 107px;">Son Gohan is a half-breed Saiyan and one of the most prominent characters in the Dragon Ball series. He is the elder son of the series' primary protagonist Goku and his wife Chi-Chi, the eldest nephew of Raditz, the older brother of Goten, the husband of Videl and father to Pan. He is named after Goku's adoptive grandfather, Gohan.</textarea>
</div>

`

contactsDIV.innerHTML += tempCharHTML;
