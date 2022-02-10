
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
        <p class="lead">${anime[27].synopsis}</p><br>
        <a href="">Characters</a>
        </div>
        <div class="col-4 border border-5px">
        <h1 class="text-danger">${anime[3].title}</h1><br>
        <img src="https://cdn.myanimelist.net/images/anime/11/39717.jpg"> <br>
        <p class="lead">${anime[3].synopsis}</p><br>
        <a href="">Characters</a>
        </div>
        <div class="col-4 border border-5px">
        <h1 class="text-danger">${anime[7].title}</h1><br>
        <img src="https://cdn.myanimelist.net/images/anime/1286/99889.jpg"> <br>
        <p class="lead">${anime[7].synopsis}</p><br>
        <a href="">Characters</a>
        </div>
        <div class="col-4 border border-5px">
        <h1 class="text-danger">${anime[8].title}</h1><br>
        <img src="https://cdn.myanimelist.net/images/anime/1337/99013.jpg"> <br>
        <p class="lead">${anime[8].synopsis}</p><br>
        <a href="">Characters</a>
        </div>
        <div class="col-4 border border-5px">
        <h1 class="text-danger">${anime[61].title}</h1><br>
        <img src="https://cdn.myanimelist.net/images/anime/1607/117271.jpg"> <br>
        <p class="lead">${anime[61].synopsis}</p><br>
        <a href="">Characters</a>
        </div>
    `
//     let tempAnimeHTML = `
//     <div class="col-4 text-success lead">
// <div class="card" style="width: 18rem;">
//     <img src="${anime.img_url}" class="card-img-top" alt="${anime.title}">
// <div class="card-body">
// <h5 class="card-title">${anime.title}</h5>
// <p class="text-primary">${anime.synopsis}</p>
// <a href="" class="btn btn-primary">Characters</a>
// </div>

// </div>
//     `;
    
//     for (let i = 0; i < anime.length; i++) {
//         let anime1 = "Shingeki no Kyojin";
//         let anime2 = "";
//         let anime3 = "";
//         let anime4 = "";
//         let anime5 = "";
//         if (anime.title === anime1) {
//             let tempAnimeHTML = `
//             <div class="col-4 text-success lead">
//         <div class="card" style="width: 18rem;">
//             <img src="${anime.img_url}" class="card-img-top" alt="${anime.title}">
//         <div class="card-body">
//         <h5 class="card-title">${anime.title}</h5>
//         <p class="text-primary">${anime.synopsis}</p>
//         <a href="" class="btn btn-primary">Characters</a>
//         </div>
    
//         </div>
//             `
//         }
//     }
        
         contactsDIV.innerHTML += tempAnimeHTML;
    })





