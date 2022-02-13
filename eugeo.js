

const contactsDIV = document.getElementById('char_list');
let tempCharHTML = `
<div class="col-4 text-success lead">
  <div class="card border border-5 border-danger bg-warning" style="width: 18rem;">
    <img src="https://cdn.myanimelist.net/images/characters/13/355420.jpg" class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">Eugeo  <button>VOTE:</button></h5>
  </div>

</div>

`

contactsDIV.innerHTML += tempCharHTML;