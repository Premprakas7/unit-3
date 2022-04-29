async function Product(){
    try{
        
        let res=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian`);
        let data=await res.json();
        showProduct(data);
        console.log('data',data);
    }
    catch(err){
        console.log('err',err);

    }
}
Product();

let cart=localStorage.getItem("cart");
if(!cart){
    cart=[];
    localStorage.setItem("cart",JSON.stringify(cart));
    cartCount();
}
else{
    cart=JSON.parse(cart);
    cartCount();
}

function cartCount(){
    let count=document.querySelector("#count");
    count.textContent="items " +cart.length;
}


function showProduct(data){
    data.meals.forEach(function (d){

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
        btn.textContent=" Add To Cart"
        btn.onclick= function (event){
            AddToCart(d);
        }
        function AddToCart(d){
            let cart=JSON.parse(localStorage.getItem("cart"));
            cart.push(d);
            localStorage.setItem('cart',JSON.stringify(cart));

        } 

        div.append(img,name,price,btn);

        document.querySelector("#menu").append(div );

    });
}