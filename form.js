var linkFormEl = $('#add-links-form');
var linkListEl = $('#added-links-list');

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