let cart=JSON.parse(localStorage.getItem("cart"));

cart.forEach(function (d){

    let div=document.createElement("div");

    let img=document.createElement("img");
    img.src=d.strMealThumb;
    img.setAttribute('id','image');

    let name=document.createElement("p");
    name.textContent=d.strMeal;
    name.setAttribute('id','name');

    let price=document.createElement("p");
    price.textContent=(Math.random())*500;
    price.setAttribute('id','name');

    let btn=document.createElement("button");
    btn.setAttribute('id','cartbtn');
    btn.textContent=" Remove"

    div.append(img,name,price,btn);

    document.querySelector("#cart").append(div );

});

let total=cart.reduce(function(ac,cv){
    return ac+Number(cv.price);
},0)

document.querySelector("#total").textContent=`total amount to paid== ${total}`
