function login(event){

    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;


    if( username === "henry" && password === "1234"){

        alert("Login Exitoso");
    }else{
        errorMessage.textContent = "Usuario o contrasena incorrectos";
    }
}

var loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", login);