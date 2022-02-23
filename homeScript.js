const mainDIV = document.getElementById("mainDIV");
const h1Tag = document.getElementById("h1Tag");
const ulTag = document.getElementById("ulTag");
const bodyTag = document.getElementById("bodyTag");
h1Tag.innerHTML = "Welcome To AnimeFans101!!!";
const newLi = document.createElement("li");
const newLi2 = document.createElement("li");
const newLi3 = document.createElement("li");
const newLi4 = document.createElement("li");

newLi.innerHTML = "Hello Anime Fans!";
ulTag.appendChild(newLi);
newLi2.innerHTML = "First, read the plot summary of each anime in our top 5 list<br> by clicking on the <em>Anime</em> link in the Nav or button at bottom of page";
ulTag.appendChild(newLi2);
newLi3.innerHTML = "After you have decided which anime to choose, by picking<br> the story that you find most intrigueing, click on the<br> Characters link below the summary and you will be taken<br> to the voting page"
ulTag.appendChild(newLi3);
newLi4.innerHTML = "Now all you have to do is click the Vote button to add a vote<br> to your favorite character. Come back later to see who gets<br>the most votes or check the current favorite link!"
ulTag.appendChild(newLi4);
ulTag.style.color = "yellow"
h1Tag.style.color = "yellow"
