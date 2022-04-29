async function apiCall(url) {
try{
    let res= await fetch(url)
    let data=await res.json();
    return data;
}
  catch (err){
        console.log("err",err);
  }  
    //add api call logic here
}


function appendArticles(articles, main) {
    articles.forEach((el)=>{

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

        div.append(img,title,des);
        div.onclick=(()=>{
            localStorage.setItem("article",JSON.stringify(el));
            window.location.href='news.html';
        })


        main.append(div);

    })

    //add append logic here
    
}

export { apiCall ,appendArticles }


//urlToImage