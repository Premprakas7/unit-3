
async function ProductData(){
    try{
        let res=await fetch(`https://fakestoreapi.com/products`);
        let data =await res.json();
        showProduct(data);
        console.log('data', data);
    }
    catch(err){
        console.log('err',err);
    }
}
ProductData();

async function sortPrice(){
try{
    let res=await fetch(`https://fakestoreapi.com/products`);
    var data=await res.json();

    let selected = document.querySelector("#sort").value;
    if(selected){
        let updatedata=data.sort(function sortfunction(a,b){
            if(selected =="High"){
                    return (b.price) - (a.price);
            }
            if(selected == "Low"){
                    return (a.price) - (b.price);   
            }
            showProduct(updatedata);
        });
    }
    else {
        let updatedata = data.filter(filterFunction);
        showProduct(updatedata);
      }

}
catch(err){console.log('err',err);
}

}  


function showProduct(data){
    
    data.forEach(function (d) {
        
         let div=document.createElement('div');
        let img=document.createElement("img");
        img.setAttribute("id", "image");
        img.src=d.image;

        let name=document.createElement("p");
        name.setAttribute("id", "name");
        name.textContent=d.title;

        let price=document.createElement("p");
        price.setAttribute("id", "price");
        price.textContent=d.price;

        let rating=document.createElement("p");
        rating.setAttribute("id", "rating");
        rating.textContent=d.rating.rate;

        let btn=document.createElement("button");
        btn.setAttribute("id", btn);
        btn.textContent='Add To Cart';
        btn.onclick=function(evenr){
            addtocart(data);
        }

        div.append(img,name,price,rating,btn);
        document.querySelector("#product").append(div);

    });
}
