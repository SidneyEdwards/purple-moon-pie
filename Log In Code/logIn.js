
//If the User does not have a log-in, they can click the "New to QRYou button" to be re-directed to the sign-up form page
var form =document.getElementById("login-div")

var NewToQRYou = document.getElementById("sign-up") 
NewToQRYou.addEventListener("click", switchToForm2)

function switchToForm2() {
window.location.href = ("form.html")
};



//Saves the user name and password for the user in local storage
if(localStorage.getItem("username") && localStorage.getItem("password")){
    document.getElementById("username").value = localStorage.getItem("username")
    document.getElementById("password").value = localStorage.getItem("password")

}

form.addEventListener("submit", (i) => {
    i.preventDefault()
var username= document.getElementById("username").value;
var password=document.getElementById ("password").value;



//saves the username and password to local storage
localStorage.setItem("username", username)
localStorage.setItem("password", password)

});

//Checks that the Username and Password are correct/match



//Clicking the log-in button re-directs the user to their Homepage
var userLogInButton = document.getElementById("btn btn-info") 
userLogInButton.addEventListener("click", switchToForm)

function switchToForm() {
  window.location.href = ("/QR Create Code/QRCreate.html")
}


