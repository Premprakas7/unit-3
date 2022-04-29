import sidebar from "./components/sidebar.js";

let sidebar_box=document.getElementById("sidebar");
sidebar_box.innerHTML=sidebar();
let dataArr=[];
let data=JSON.parse(localStorage.getItem('article'));
console.log(dataArr);
dataArr.push(data);


dataArr.forEach((el)=>{

    let div=document.createElement("div");

    let img=document.createElement("img");
    img.src= el.urlToImage;
    img.id="image";

    let title=document.createElement("p");
    title.textContent="Headline  :   "  +  el.title;
    title.id="headline"

    let des=document.createElement("p");
    des.textContent="Description :     " + el.description;
    des.id="description";

    let date=document.createElement("p");
    date.textContent="Date: " +  el.publishedAt;

    let content=document.createElement("p");
    content.textContent="Content :     " + el.content;

    


    div.append(date,content,img,title,des);
    main.append(div);
})