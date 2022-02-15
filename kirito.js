
	const contactsDIV = document.getElementById('char_list');
	let tempCharHTML = `
	<div class="col-4 text-success lead" style="width:200px;height:200px">
	  <div class="card border border-5 border-danger bg-warning" style="width: auto; height: auto">
		<img src="./char_images/kirito.jpg" class="card-img-top">
	  <div class="card-body">
		<h5 class="card-title">Kazuto Kirigaya  <button id="button">VOTE:</button></h5>
	  </div>
	
	</div>
	
	`

	contactsDIV.innerHTML += tempCharHTML;