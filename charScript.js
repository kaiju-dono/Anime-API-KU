
fetch("https://animi.p.rapidapi.com/name?name=Levi", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "animi.p.rapidapi.com",
		"x-rapidapi-key": "a4ca4ca3e2msh9818f03913b4bd3p17658fjsn91e19c2cb703"
	}
})
.then(response => {
    return response
})
.then(data => {
    const contactsDIV = document.getElementById('char_list');
    console.log(data.url)
})
.catch(err => {
	console.error(err);
})
