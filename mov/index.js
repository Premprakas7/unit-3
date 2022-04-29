



// slideshow
localStorage.setItem("name" , "slide");
var x;
function counter(){
    var image_arr=JSON.parse(localStorage.getItem('images'))
    var slide=document.getElementById('slide_images')

    var i=0;
    
    x= setInterval (function() {
        if(i===image_arr.length){
            i=0
        }
        slide.src=image_arr[i]
        i=i+1
    
    },2000)
}
counter();

// search movies

async function SearchMovie(){

    try{
        
        let search_box=document.getElementById("search_box").value;
    let res=await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=5d2ddf93&s==${search_box}`)
    let data= await res.json();
    console.log('data', data);
    return data.Search;
    }
    catch(err){
      
        console.log('err',err);
    }
}

async function main(){
  let data=await SearchMovie();
  console.log('data', data);
  if(data===undefined){
      return false;
  }
  showmSearchMovie(data);
  
  }

function showmSearchMovie(data){
    movies.innerHTML="";
    data.forEach(function (d) {
          
    let div=document.createElement("div");
    

    let Poster=document.createElement("img");
    Poster.setAttribute("id","search")
    Poster.src=d.Poster;

    let Title=document.createElement("p");
    Title.innerText="Title  :"+d.Title;
    Title.setAttribute("id","name")

    let Year=document.createElement("p");
    Year.innerText="Year  :"+d.Year;
    Year.setAttribute("id","name")

    div.append(Poster,Title,Year,)
    

    document.querySelector("#movies").append(div);
        
    })
}

let timerId;
function debounce(func,delay){
    
    if(timerId){
        clearTimeout(timerId)
    }

   timerId=  setTimeout(function(){
        func();
    },delay);
}
