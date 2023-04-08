var linkFormEl = $('#add-links-form');
var linkListEl = $('#added-links-list');
var fetchButton = document.querySelector('#go-to-user-homepage')
var requestLinkedInURL = ""
var localStorageBtn = document.getElementById("submit-local-storage-btn")

// create function to handle form submission
function submitLink(event) {
  event.preventDefault()
  // select form element by its `name` attribute and get its value
  var linkItem = $('input[name="link-input"]').val();

  // if there's nothing in the form entered, don't print to the page
  if (!linkItem) {

    return;
  }
  // print to the page
  linkListEl.append('<a href="' + linkItem + '">' + linkItem + '</a>' + ", " );


  // clear the form input element
  $('input[name="link-input"]').val('');
}
// Create a submit event listener on the form element
linkFormEl.on('submit', submitLink);



function getApiGithub(event) {
  event.preventDefault();
  
  var githubUsername = document.getElementById('github-username').value;

  console.log(githubUsername);

  var requestUrl = 'https://api.github.com/users/' + githubUsername + '/repos';
  
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

    });
}
function getApiLinkedIn(event) {
  event.preventDefault();
  
  var LinkedInUsername = document.getElementById('LinkedIn-username').value;

  console.log(githubUsername);

  var requestUrl = 'https://api.github.com/users/' + LinkedInUsername + '/repos';
  
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

    });
}



//Getting Started Button Leads the User to the Getting Started Page
var goToUserHomePage = document.getElementById("go-to-user-homepage") 
goToUserHomePage.addEventListener("click", switchToForm)

function switchToForm() {
  location.assign("./QRCreate.html");
  saveToLocalStorage();
}



fetchButton.addEventListener('click', getApiGithub);
fetchButton.addEventListener('click', getApiLinkedIn);

function saveToLocalStorage() {
  var firstName = document.getElementById('first-name-input').value;
  var lastName = document.getElementById('last-name-input').value;
  var username = document.getElementById('username-input').value;
  var password = document.getElementById('password-input-input').value;
  var linkedInUsername = document.getElementById('LinkedIn-username').value;
  var githubUsername = document.getElementById('github-username').value;

  if (firstName === '') {
    displayMessage('error', 'First name cannot be blank.');
  } else if (lastName === '') {
    displayMessage('error', 'Last name cannot be blank.');
  } else if (username === '') {
    displayMessage('error', 'Username cannot be blank.');
  } else if (password === '') {
    displayMessage('error', 'password cannot be blank.');
  } else {
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('githubUsername', githubUsername);
    localStorage.setItem('linkedInUsername', linkedInUsername);
  }
}

localStorageBtn.addEventListener("click", saveToLocalStorage)