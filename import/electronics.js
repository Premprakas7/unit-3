import navbar  from "./components/navbar.js";

import {getData,appenedData} from"./scripts/showdata.js";

let navbar_box=document.getElementById("navbar_box");
navbar_box.innerHTML=navbar();

let url="https://fakestoreapi.com/products/category/electronics";
let res= await getData(url)
let parent=document.getElementById("data");
console.log(res);
appenedData(res,parent)
