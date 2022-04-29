import sidebar from "./components/sidebar.js";

let sidebar_box=document.getElementById("sidebar");
sidebar_box.innerHTML=sidebar();

import { apiCall, appendArticles } from "./scripts/main.js";

let res= await apiCall(`https://shrouded-earth-23381.herokuapp.com/api/headlines/india`);
console.log(res);
let articles=document.getElementById("main");
appendArticles(res,articles);

let input=document.getElementById("searchbar");

input.addEventListener('keypress',((e)=>{

    if(e.key==='Enter'){
        let input_value=document.getElementById('searchbar').value;
        localStorage.setItem('search_term', input_value);
        window.location.href="search.html";
        console.log(e);
    }
    
}))