var linkFormEl = $('#add-links-form');
var linkListEl = $('#added-links-list');
// var fetchButton = document.querySelector('#go-to-user-homepage')
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



function getApiGithub(githubUsername) {


  console.log(githubUsername);

  var requestUrl = 'https://api.github.com/users/' + githubUsername + '/repos';
  
  var repos= fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);


      return data;
    });
    return repos;
}

var goToUserHomePageButton = document.getElementById("go-to-user-homepage") 
goToUserHomePageButton.addEventListener("click", switchToForm)


function switchToForm() {
 saveToLocalStorage();


}


async function saveToLocalStorage() {
  var firstName = document.getElementById('first-name-input').value.trim();
  var lastName = document.getElementById('last-name-input').value.trim();
  var username = document.getElementById('username-input').value.trim();
  var password = document.getElementById('password-input-input').value.trim();
  var linkedInUsername = document.getElementById('LinkedIn-username').value.trim();
  var githubUsername = document.getElementById('github-username').value.trim();

  var gitHubRepos= await getApiGithub(githubUsername);
  localStorage.setItem ("gitHubRepos", JSON.stringify(gitHubRepos))




    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('githubUsername', githubUsername);
    localStorage.setItem('linkedInUsername', linkedInUsername);


  // setTimeout(function() {
location.assign("./QRCreate.html")
  // }, 4000)

}

localStorageBtn.addEventListener("click", saveToLocalStorage)
