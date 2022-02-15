	const contactsDIV = document.getElementById('char_list');

	let counter = 1-1;
	let tempCharHTML = `
	<div class="col-4 text-success lead" style="width:200px;height:200px">
	  <div class="card border border-5 border-danger bg-warning" style="width: auto; height: auto">
			<img src="./char_images/asuna.jpg" class="card-img-top">
	  <div class="card-body">
			<h5 class="card-title">Asuna Yuuki</h5>
			</div>
			<div id="buttonTag">
			<button id="asunaButton" onClick="vote()">Click to VOTE!</button>
			<p>Votes: <a id="clicks">${clicks}</a></p>
			</div>
	</div>
	
	`

	contactsDIV.innerHTML += tempCharHTML;
	
	




// let counter = 0;
// let names = "Asuna Yuuki";
// let bodyTag = document.getElementById("bodyTag")
// let charImg = document.querySelector("img");
// let votes = document.getElementById("button");
// let charName = document.getElementById("h5")
// charImg.src = "./char_images/asuna.jpg";
// charName.innerHTML = `${names} <br> <button>VOTE: ${counter}</button>`;
// bodyTag.addEventListener("click", (event) => {
// 	console.log(event.target);
// 	counter++;
// 	button.textContent = `${names} <br> <button>VOTE: ${counter}</button>`;
// })


	// function buttonCounter() {
	// 	counter++;
	// 	votes.innerHTML += ` ${counter}`
	// }
