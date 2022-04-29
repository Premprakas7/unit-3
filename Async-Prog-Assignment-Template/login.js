document.querySelector("form").addEventListener("submit", login);
    var regdUsers=JSON.parse(localStorage.getItem("userDataBase"));

    function login(event){
        event.preventDefault();
        var email = document.querySelector("#email").value;
        var pass = document.querySelector("#pass").value;
        

        for (var i = 0; i < regdUsers.length; i++) {
        console.log(regdUsers[i].emailAdd, regdUsers[i].passwd);
        if (regdUsers[i].emailAdd == email && regdUsers[i].passwd == pass) {
        window.location.href = "index.html";
        }
    }

    }