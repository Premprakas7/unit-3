console.log("Welcome to c1");

const express = require("express");

const app=express();
app.use(logger);
app.use(checkPermission);

app.get('/books',(req,res)=>{
   return res.send({route:"/books", role:req.role});
})

app.get('/libraries',(req,res)=>{
    return res.send({route:"/libraries", permissions:true, role:req.role});
})

app.get('/authors',(req,res)=>{
    return res.send({route:"/authors", permissions:true, role:req.role});
})

function logger(req,res,next){
    if(req.path=="/books"){
        req.role="book name";
    }
    if(req.path=="/libraries"){
        req.role="go in library";
    }
    if(req.path=="/authors"){
        req.role="go in library";
    }
    next();
    return res.send("Working")
}

function checkPermission(req,res,next){
    if(req.path=="/libraries"){
       // res.send("Prem")
        
    }
    if(req.path=="/authors"){
       // res.send("Prem");
    }
    next();
}

app.listen(4000,()=>{
    console.log("Listening at port 4000")
})