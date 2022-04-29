import navbar from "./components/navbar.js"

let navbar_box=document.getElementById("navbar_box");
navbar_box.innerHTML=navbar();

import { getData,appenedData } from "./scripts/showData.js";

let search_term=localStorage.getItem('search_term');

let res=await getData(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search_term}`);
console.log(res);

let parent=document.getElementById("data");
console.log(res);
appenedData(res,parent);