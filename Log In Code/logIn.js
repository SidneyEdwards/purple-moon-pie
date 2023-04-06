var form = document.getElementById("login-div")


//Saves the user name and password for the user in local storage
if(localStorage.getItem("username") && localStorage.getItem("password")){
    document.getElementById("username").value = localStorage.getItem("username")
    document.getElementById("password").value = localStorage.getItem("password")

}

form.addEventListener("submit", (e) => {
    event.preventDefault()
var username = document.getElementById("username").value;
var password = document.getElementById ("password").value;



//saves the username and password to local storage
localStorage.setItem("username", username)
localStorage.setItem("password", password)
});