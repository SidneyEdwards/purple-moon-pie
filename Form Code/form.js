var linkFormEl = $('#add-links-form');
var linkListEl = $('#added-links-list');
var fetchButton = document.querySelector('#go-to-user-homepage')
var requestLinkedInURL = ""


// create function to handle form submission
function submitLink(event) {
  event.preventDefault()
  // select form element by its `name` attribute and get its value
  var linkItem = $('input[name="link-input"]').val();
  console.log("hit")
  // if there's nothing in the form entered, don't print to the page
  if (!linkItem) {
    console.log('No links added to form!');
    return;
  }
  // print to the page
  linkListEl.append('<a>' + linkItem + '</a>');
  // clear the form input element
  $('input[name="link-input"]').val('');
}
// Create a submit event listener on the form element
linkFormEl.on('submit', submitLink);

function makeLinkClickable() {
  
}

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
  window.location.href = ("/QR Create Code/QRCreate.html");
}



fetchButton.addEventListener('click', getApiGithub);
fetchButton.addEventListener('click', getApiLinkedIn);