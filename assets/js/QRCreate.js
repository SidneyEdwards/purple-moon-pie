var firstName = localStorage.getItem("firstName");
var lastName = localStorage.getItem("lastName");
var username = localStorage.getItem("username");
var password = localStorage.getItem("password");
var githubUsername = localStorage.getItem("githubUsername");
var linkedInUsername = localStorage.getItem("linkedInUsername");
var userInformationBtn = document.getElementById("userToggleBtn")
var userContainer = document.getElementById("user-information-container")


// var getQRCode = document.querySelector('#getQRCode-btn')
// var requestQRCodeURL = ""


function getApiQRCode(event) {
event.preventDefault();


var requestQRCodeUrl = 'http(s)://api.qrserver.com/v1/create-qr-code/?data=[https://www.google.com]&size=[100]x[100]';
fetch(requestQRCodeUrl)
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
    console.log(data);

    });
}



function displayUserInformation() {
    var firstNameEl = document.createElement("p")
    userContainer.append(firstNameEl)
    firstNameEl.innerHTML = firstName
    
    var lastNameEl = document.createElement("p")
    userContainer.append(lastNameEl)
    lastNameEl.innerHTML = lastName
    
    var usernameEl = document.createElement("p")
    userContainer.append(usernameEl)
    usernameEl.innerHTML = username
    
    var passwordEl = document.createElement("p")
    userContainer.append(passwordEl)
    passwordEl.innerHTML = password
    
    var githubUsernameEl = document.createElement("p")
    userContainer.append(githubUsernameEl)
    githubUsernameEl.innerHTML = githubUsername
    
    var linkedInUsernameEl = document.createElement("p")
    userContainer.append(linkedInUsernameEl)
    linkedInUsernameEl.innerHTML = linkedInUsername
}

userInformationBtn.addEventListener("click", displayUserInformation);



