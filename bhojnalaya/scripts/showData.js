async function getData(url){
    try{
        let res=await fetch(url);
        let data =await res.json();
        return data;
    }
        catch(error){
            console.log("error:", error);}
}
    function appenedData(data, parent){

        data.meals.forEach((el)=>{
            let div=document.createElement('div')
    
    
            let p=document.createElement('p')
            p.innerText=el.strMeal
            p.setAttribute("id","name");
    
            let img=document.createElement('img')
            img.src=el.strMealThumb;
            img.setAttribute("id","photo");

            let p2=document.createElement('p')
            p2.innerText=el.strInstructions;
            p2.setAttribute("id","details");
    
            div.append(img,p,p2);
    
            parent.append(div);
            
    
        });
    
    }

export {getData,appenedData}
    