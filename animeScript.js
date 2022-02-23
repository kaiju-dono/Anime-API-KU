
fetch("https://jikan1.p.rapidapi.com/genre/anime/1/1", {
    "method": "GET",
	"headers": {
        "x-rapidapi-host": "jikan1.p.rapidapi.com",
		"x-rapidapi-key": "a4ca4ca3e2msh9818f03913b4bd3p17658fjsn91e19c2cb703"
	}
})
.then(response => {
    return response.json();
})
.then(data => {
    const contactsDIV = document.getElementById('anime_list');
    console.log(data)
    const anime = data.anime;
    console.log(anime[27].img_url);
    let tempAnimeHTML = `
        <div style="margin:10px;height:500px;width:365px;background-image: url('./char_images/bleach.jpg');background-size:cover" class="col-4 border border-5px">
        <h1 class="text-danger">${anime[27].title}</h1><br>
        <div style="position:absolute;top:400px">
        <textarea style="width:340px;height:200px" class="lead text-success">${anime[27].synopsis}</textarea><br>
        <a style="text-shadow: 2px 2px 2px black;" class="text-warning" href="./bleach.html">Characters</a>
        </div>
        </div>

        <div style="margin:10px;height:500px;width:365px;background-image: url('./char_images/sao.jpg');background-size:cover" class="col-4 border border-5px">
        <h1 class="text-danger">${anime[3].title}</h1><br>
        <div style="position:absolute;top:400px">
        <textarea style="width:340px;height:200px" class="lead text-success">${anime[3].synopsis}</textarea><br>
        <a style="text-shadow: 2px 2px 2px black;" class="text-warning" href="./SAO.html">Characters</a>
        </div>
        </div>

        <div style="margin:10px;height:500px;width:365px;background-image: url('./char_images/kimetsuNoYaiba.jpg');background-size:cover" class="col-4 border border-5px">
        <h1 class="text-danger">${anime[7].title}</h1><br>
        <div style="position:absolute;top:400px">
        <textarea style="width:340px;height:200px" class="lead text-success">${anime[7].synopsis}</textarea><br>
        <a style="text-shadow: 2px 2px 2px black;" class="text-warning" href="./kimetsuNoYaiba.html">Characters</a>
        </div>
        </div>

        <div style="margin:10px;height:500px;width:365px;background-image: url('./char_images/cowboyBebop.jpg');background-size:cover" class="col-4 border border-5px">
        <h1 class="text-danger">${anime[29].title}</h1><br>
        <div style="position:absolute;top:930px">
        <textarea style="width:340px;height:200px" class="lead text-success">${anime[29].synopsis}</textarea><br>
        <a style="text-shadow: 2px 2px 2px black;" class="text-warning" href="cowboyBebop.html">Characters</a>
        </div>
        </div>

        <div style="margin:10px;height:500px;width:365px;background-image: url('./char_images/dbz.jpg');background-size:cover" class="col-4 border border-5px">
        <h1 class="text-danger">${anime[61].title}</h1><br>
        <div style="position:absolute;top:930px">
        <textarea style="width:340px;height:200px" class="lead text-success">${anime[61].synopsis}</textarea><br>
        <a style="text-shadow: 2px 2px 2px black;" class="text-warning" href="cowboyBebop.html">Characters</a>
        </div>
        </div>
    `

         contactsDIV.innerHTML += tempAnimeHTML;
    })





