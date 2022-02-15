
	const contactsDIV = document.getElementById('char_list');
	let tempCharHTML = `
	<div class="col-4 text-success lead">
	  <div class="card border border-5 border-danger bg-warning" style="width: 18rem;">
		<img src="./char_images/gohan.jpg" class="card-img-top">
	  <div class="card-body">
		<h5 class="card-title">Gohan  <button>VOTE:</button></h5>
	  </div>
	<p>PUT BIO HERE</p>
	</div>
	
	`

	contactsDIV.innerHTML += tempCharHTML;