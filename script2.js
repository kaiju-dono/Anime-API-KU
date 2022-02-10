
fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'User 1'
    })
})
    .then(res => {
        return res.json()
        })
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))








//console.log("Hello Fetch()");

// fetch('https://reqres.in/api/users/23')
//     .then(res => {
//         if (res.ok) {
//             console.log('SUCCESS');
//         } else {
//             console.log('Not Successful')
//         }
//          return res.json()
//         })
//     .then(data => console.log(data))
//     .catch(error => console.log('ERROR'))


// fetch("https://reqres.in/api/users/") // i request you fetch, get me a response, when you get it, then...
//     .then((response) => {
//         console.log(response);
//         return response.json()
//     })
//     .then((data) => {
//         console.log(data)
//         const contacts = json.data;
//         console.log(contacts);

        // contacts.forEach(person => {
        //     console.log(person.first_name);
        //     let tempPersonHTML = `
        //     <div class="col-4 text-success lead">
        //       <div class="card" style="width: 18rem;">
        //         <img src="${person.avatar}" class="card-img-top" alt="${person.first_name}">
        //       <div class="card-body">
        //         <h5 class="card-title">${person.first_name} ${person.last_name}</h5>
        //         <a href="mailto:${person.email}" class="btn btn-primary">Email</a>
        //       </div>
            
        //     </div>`

        //     contactsDIV.innerHTML += tempPersonHTML;
        // })