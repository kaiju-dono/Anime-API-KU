
	const contactsDIV = document.getElementById('char_list');
	let tempCharHTML = `
	<div class="col-4 text-success lead">
	  <div class="card border border-5 border-danger bg-warning" style="width: 18rem;">
		<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6233922d-753c-4152-9afe-3b82ce990681/d6qp65y-7186e4df-a12f-4932-9cf2-16dcf2875b72.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzYyMzM5MjJkLTc1M2MtNDE1Mi05YWZlLTNiODJjZTk5MDY4MVwvZDZxcDY1eS03MTg2ZTRkZi1hMTJmLTQ5MzItOWNmMi0xNmRjZjI4NzViNzIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.GSEXHJZpY6T4ouVKuHjAAF-j9INSPgLMT95iJQ24fLA" class="card-img-top">
	  <div class="card-body">
		<h5 class="card-title">Asuna Yuuki  <button>VOTE:</button></h5>
	  </div>
	
	</div>
	
	`

	contactsDIV.innerHTML += tempCharHTML;