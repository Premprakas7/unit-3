let key="AIzaSyBS5S2XNItOCE4mIp2dV2wc9kHxYRe2QWg";

let box=document.getElementById("Video_box");

async function displayData(){
try{

    let search_box=document.getElementById('search_box').value;
    let res= await fetch(`https://www.googleapis.com/youtube/v3/search?key=${key}&q=${search_box}&type=video&maxResults=24`)
    let data=await res.json();
    console.log(data);
    let Lists=data.items;
    console.log(Lists);
    display(Lists);
}
catch(err){
    console.log('err',err);
}
}

const display=(Video_Array) =>{
   box.innerHTML="";
    Video_Array.forEach( (video)=>{
        
        const{id:{videoId},}=video;
        let div=document.createElement("div");

        let Iframe=document.createElement('iframe');
        Iframe.src=`https://www.youtube.com/embed/${videoId}`;
        Iframe.width="100%";
        Iframe.setAttribute('allowFullScreen',true);

        let p=document.createElement("p");
        p.textContent=video.title;

        div.append(Iframe,p);
        box.append(div);
    
    });

};


async function random(){
    try{
        let res= await fetch(`https://www.googleapis.com/youtube/v3/videos?part=contentDetails&chart=mostPopular&regionCode=IN&maxResults=25&key=${key}`);
        let data=await res.json();
        console.log(data);
        let Lists=data.items;
        console.log(Lists);
        nafrat(Lists);
    }
    catch(err){
        console.log('err',err);
    }
    }
    random();

    
const nafrat=(Video_Array) =>{
    box.innerHTML="";
     Video_Array.forEach( (video)=>{
         
         const{id}=video;
         let div=document.createElement("div");
 
         let Iframe=document.createElement('iframe');
         Iframe.src=`https://www.youtube.com/embed/${id}`;
         Iframe.width="100%";
         Iframe.setAttribute('allowFullScreen',true);
 
         let p=document.createElement("p");
         p.textContent=video.title;
 
         div.append(Iframe,p);
         box.append(div);
     
     });
 
 }



