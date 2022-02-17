
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
        <div class="col-4 border border-5px">
        <h1 class="text-danger">${anime[27].title}</h1><br>
        <img src="https://cdn.myanimelist.net/images/anime/3/40451.jpg" style="width:200px"> <br>
        <textarea style="width:400px;height:200px" class="lead text-success">${anime[27].synopsis}</textarea><br>
        <a href="">Characters</a>
        </div>
        <div class="col-4 border border-5px">
        <h1 class="text-danger">${anime[3].title}</h1><br>
        <img src="https://cdn.myanimelist.net/images/anime/11/39717.jpg"> <br>
        <textarea style="width:400px;height:200px" class="lead text-success">${anime[3].synopsis}</textarea><br>
        <a href="">Characters</a>
        </div>
        <div class="col-4 border border-5px">
        <h1 class="text-danger">${anime[8].title}</h1><br>
        <img src="https://cdn.myanimelist.net/images/anime/1286/99889.jpg"> <br>
        <textarea style="width:400px;height:200px" class="lead text-success">${anime[8].synopsis}</textarea><br>
        <a href="">Characters</a>
        </div>
        <div class="col-4 border border-5px">
        <h1 class="text-danger">${anime[29].title}</h1><br>
        <img src="https://cdn.myanimelist.net/images/anime/4/19644.jpg"> <br>
        <textarea style="width:400px;height:200px" class="lead text-success">${anime[29].synopsis}</textarea><br>
        <a href="">Characters</a>
        </div>
        <div class="col-4 border border-5px">
        <h1 class="text-danger">${anime[61].title}</h1><br>
        <img src="https://cdn.myanimelist.net/images/anime/1607/117271.jpg"> <br>
        <textarea style="width:400px;height:200px" class="lead text-success">${anime[61].synopsis}</textarea><br>
        <a href="">Characters</a>
        </div>
    `

         contactsDIV.innerHTML += tempAnimeHTML;
    })





