fetch("https://animi.p.rapidapi.com/name?name=Levi", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "animi.p.rapidapi.com",
		"x-rapidapi-key": "1351ea00bdmshf176319cd6f17e7p19b0dajsn32c677b31fed"
	}
})
.then(response => {
	return response.clone();
})
.then(data => {
    console.log(data)
})
.catch(err => {
	console.error(err);
});