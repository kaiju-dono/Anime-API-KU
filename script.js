import { fetchAnime } from "./js/fetchAnime.js";
import { fetchContacts } from "./js/fetchContacts.js";
//import {fetchAnimeQuote} from "./js/fetchAnimeQuotes.js";

const contactsDIV = document.getElementById('contacts');
// console.log(contactsDIV)

fetchContacts();
fetchAnime();
//console.log("from fetchContachs fetchContacts");

    
    
    