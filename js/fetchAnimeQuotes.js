async function fetchAnimeQuote() {
    const contactsDIV = document.getElementById('contacts');

    const response = await fetch("https://api.jikan.moe/v3");
    const data = await response.json();

    console.log("From fetchAnimeQuote", data)

    const contacts = data.Author;
    console.log(contacts)
    data.forEach(person => {
        console.log("new log", person);
        let tempPersonHTML = `
        <div class="col-4 text-success lead">
          <div class="card border border-5 border-danger bg-warning" style="width: 18rem;">
          <div class="card-body">
            <h1 class="card-title">${data.author}</h1>
          </div>
        
        </div>`

        contactsDIV.innerHTML += tempPersonHTML;



    
})
}
export {fetchAnimeQuote}