

async function getData(url){
   try{
    let res=await fetch(url)
    let data=await res.json();
    return data;

   } 
   catch(error){
       console.log("error",error);
   }
}

//WSommLi0VZGXxOqhSVyMcz4wKnL6eSlGYq5e4Vkhb3I
function appenedData(data,parent){
    data.forEach((elem)=>{
            let div=document.createElement('div')
            let p=document.createElement('p')
            p.innerText=elem.user.name;
    
            let img=document.createElement('img')
            img.src=elem.urls.small;

            div.append(img,p);
            div.onclick=(()=>{
                localStorage.setItem("clicked_image", JSON.stringify(elem));
                window.location.href='details.html';
            })
            parent.append(div);

    })
}
export {getData,appenedData}