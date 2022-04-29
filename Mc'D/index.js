function OrderFood(){
    
    let status='open';
    let order=document.getElementById('select_tag').value;
    
    let food= new Promise(function(resolve,reject){
    
        if(status=='open'){
            if(order=="burger"){
                let box=document.getElementById("display");
                box.setAttribute('src',"https://images.unsplash.com/photo-1586816001966-79b736744398?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
                resolve(order);
                console.log(order);
            }
            else if(order=="pizza"){
                let box=document.getElementById("display");
                box.setAttribute('src',"https://images.unsplash.com/photo-1615719413546-198b25453f85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80");
                resolve(order);
            }
            else if(order=="coffee"){
                let box=document.getElementById("display");
                box.setAttribute('src',"https://images.unsplash.com/photo-1512568400610-62da28bc8a13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80");
                resolve(order);
            }
            else if(order=="cold"){
                let box=document.getElementById("display");
                box.setAttribute('src',"https://images.unsplash.com/photo-1520568444554-4698653b539c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
                resolve(order);
            }
                
        }  
        else{
            reject("told you it was closed")
        }
            
    })

    food.then(function(res){
           alert(`you order success fully added`);
        console.log('res',res);
        
    })
    food.catch(function(err){
        console.log('err',err);
    })

}