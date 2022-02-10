fetch("https://anilistmikilior1v1.p.rapidapi.com/getCharacter", {
	"method": "POST",
	"headers": {
		"content-type": "application/x-www-form-urlencoded",
		"x-rapidapi-host": "Anilistmikilior1V1.p.rapidapi.com",
		"x-rapidapi-key": "a4ca4ca3e2msh9818f03913b4bd3p17658fjsn91e19c2cb703"
	},
	"body": {
		"accessToken": "accessToken",
		"characterId": "1"
	}
})
.then(response => {
    return response.json()
})
.then(data => {
    console.log(data)
})
