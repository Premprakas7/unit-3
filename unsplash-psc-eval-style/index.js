import sidebar from "./components/sidebar.js";

let side=document.getElementById("sidebar");
side.innerHTML=sidebar();

import { getData,appenedData } from "./scripts/main.js";

let res=await getData(`https://api.unsplash.com/photos/?client_id=WSommLi0VZGXxOqhSVyMcz4wKnL6eSlGYq5e4Vkhb3I`);
console.log(res);
let parent=document.getElementById('main');
appenedData(res,parent);


let input=document.getElementById("search_box");
input.addEventListener('keypress',(e)=>{
    if(e.key==='Enter'){
        
      let input_value=document.getElementById('search_box').value;  
      localStorage.setItem('search_term',input_value);
      window.location.href='search.html';
    }


})
