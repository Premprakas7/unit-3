import { getData,appenedData } from "./scripts/main.js";

let search_term=localStorage.getItem("search_term");

let res=await getData(`https://api.unsplash.com/search/photos/?&query=${search_term}&client_id=WSommLi0VZGXxOqhSVyMcz4wKnL6eSlGYq5e4Vkhb3I&per_page=50`);
let parent=document.getElementById('main');
console.log(res.results,parent);
appenedData(res.results,parent)