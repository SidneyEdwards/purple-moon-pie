var fetchButton = document.querySelector('#getAPI-btn')
var requestLinkedInURL = ""





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

fetchButton.addEventListener('click', getApiGithub);
fetchButton.addEventListener('click', getApiLinkedIn);