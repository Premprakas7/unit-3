import navbar from "./components/navbar.js";

let navbar_box=document.getElementById("navbar_box");
navbar_box.innerHTML=navbar();

import { getData,appenedData } from "./scripts/showData.js";

let url=`https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`;
let res=await getData(url);
let parent=document.getElementById("data");
console.log(res);
appenedData(res,parent);