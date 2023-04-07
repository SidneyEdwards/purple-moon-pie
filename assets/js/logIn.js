
//If the User does not have a log-in, they can click the "New to QRYou button" to be re-directed to the sign-up form page

var form =document.getElementById("login-div")

var NewToQRYou = document.getElementById("sign-up") 
NewToQRYou.addEventListener("click", switchToForm2)

function switchToForm2() {
  console.log('hit')
  location.assign("./form.html")
};


//Checks against local data that the Username and Password are correct/match




//Clicking the log-in button re-directs the user to their Homepage
var userLogInButton = document.getElementById("btn-btn-info") 
userLogInButton.addEventListener("click", checkID)

function checkID(event) {
  event.preventDefault();
  var logInUsername = getElementById('username');
  var logInPassword = getElementById('password');
  var localUsername = localStorage.getItem('username');
  var localPassword = localStorage.getItem('password')
  if (logInUsername.value == localUsername) {
    console.log('confirmUsername');
  } else {
    console.log('incorrect');
    
  }
  if (logInPassword.value == localPassword) {
    console.log('confirmPassword');
    
  } else {
    console.log('incorrect');
    
  }
}

function switchToForm(event) {
  event.preventDefault();
  location.assign("./QRCreate.html")
}

