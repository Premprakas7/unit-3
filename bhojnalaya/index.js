import navbar from "./components/navbar.js";



let navbar_box=document.getElementById("navbar_box");
navbar_box.innerHTML=navbar();



let input=document.getElementById("search_box");

input.addEventListener('keypress', (e)=>{
   
if(e.key ==="Enter"){
    e.preventDefault();
    let input_value=document.getElementById('search_box').value;
    localStorage.setItem("search_term",input_value);
    window.location.href="search.html";
    
}
})










 

    



