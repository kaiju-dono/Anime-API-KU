import { fetchAnime } from "./js/fetchAnime.js";
import { fetchContacts } from "./js/fetchContacts.js";
//import {fetchAnimeQuote} from "./js/fetchAnimeQuotes.js";
import { fetchJikan } from "./js/fetchJikan.js";



const contactsDIV = document.getElementById('contacts');
// console.log(contactsDIV)

fetchContacts();
fetchAnime();
fetchJikan();
//console.log("from fetchContachs fetchContacts");

    
    
    