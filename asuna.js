	const contactsDIV = document.getElementById('char_list');

	let tempCharHTML = `
	<div class="col-4 text-success lead" style="width:250px;height:599px">
	  <div class="card border border-5 border-danger bg-warning" style="width: auto; height: auto">
			<img style="height:336px" src="./char_images/asuna.jpg" class="card-img-top">
	  <div class="card-body">
			<h5 class="card-title">Asuna Yuuki</h5>
			</div>
			<div id="buttonTag">
			<button id="asunaButton" onClick="vote()">Click to VOTE!</button>
			<p>Votes: <a id="asunaClicks">${asunaClicks}</a></p>
			</div>
			<textarea style="height: 107px;">Asuna (real name Asuna Yuuki) is the main female protagonist of the anime and light novel series, Sword Art Online. Aside from being the second in command of the Knights of the Blood Oath, the strongest guild in Aincrad, she is also the adoptive mother of Yui and the love interest of Kirito.</textarea>
	</div>
	
	`

	contactsDIV.innerHTML += tempCharHTML;