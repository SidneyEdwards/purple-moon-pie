var form =document.getElementById("login-div")


//Saves the user name and password for the user in local storage
if(localStorage.getIten("username") && localStorage.getItem("password")){
    document.getElementById("username").value = loacalStorage.getItem("username")
    document.getElementById("password").value = loacalStorage.getItem("password")

}

form.addEventListener("submit", (e) => {
    e.preventDefault()
var username= document.getElementById("username").value;
var password=document.getElementById ("password").value;



//saves the username and password to local storage
localStoarge.setItem("username", username)
loacalStorage.setItem("password", password)
};