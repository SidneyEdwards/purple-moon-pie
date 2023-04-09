var linkListEl = $('#added-links-list');
var requestLinkedInURL = ""
var localStorageBtn = document.getElementById("submit-local-storage-btn")

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

// getApiGithub()

function getApiLinkedIn(event) {
  event.preventDefault();
  
  var LinkedInUsername = document.getElementById('LinkedIn-username').value;

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


// Listening for submit button to set user information to local storage and call API
localStorageBtn.addEventListener('click', getApiGithub);
localStorageBtn.addEventListener('click', getApiLinkedIn);

function saveToLocalStorage() {
  var firstName = document.getElementById('first-name-input').value;
  var lastName = document.getElementById('last-name-input').value;
  var githubUsername = document.getElementById('github-username').value;
  var linkedInUsername = document.getElementById('LinkedIn-username').value;

  if (firstName === '') {
    displayMessage('error', 'First name cannot be blank.');
  } else if (lastName === '') {
    displayMessage('error', 'Last name cannot be blank.');
  } else {
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('githubUsername', githubUsername);
    localStorage.setItem('linkedInUsername', linkedInUsername);
  }
}

localStorageBtn.addEventListener("click", saveToLocalStorage)