
//Getting Started Button Leads the User to the Getting Started Page
var startingButton = document.getElementById("getting-started-btn") 
startingButton.addEventListener("click", switchToForm)

function switchToForm() {
  window.location.href = ("/Form Code/form.html")
}

//Log-In button click leads the user to the Log-In Page
var logInButton = document.getElementById("log-in-btn") 
logInButton.addEventListener("click", switchToLogIn)

function switchToLogIn() {
  window.location.href = ("/Log In Code/logIn.html")
}