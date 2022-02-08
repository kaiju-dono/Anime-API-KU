async function fetchAnime() {
    const contactsDIV = document.getElementById('contacts');

    const response = await fetch("https://anime-facts-rest-api.herokuapp.com/api/v1");
    const data = await response.json();

    console.log("From fetchAnime", data)

    const contacts = data.data;

    contacts.forEach(person => {
        console.log("new log", person.anime_img);
        let tempPersonHTML = `
        <div class="col-4 text-success lead">
          <div class="card border border-5 border-danger bg-warning" style="width: 18rem;">
            <img src="${person.anime_img}" class="card-img-top" alt="${person.anime_name}">
          <div class="card-body">
            <h5 class="card-title">${person.anime_name}</h5>
          </div>
        
        </div>`

        contactsDIV.innerHTML += tempPersonHTML;



    
})
}
export {fetchAnime}