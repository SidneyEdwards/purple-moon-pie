var startingButton = document.getElementById("getting-started-btn") 
startingButton.addEventListener("click", switchToForm)

function switchToForm() {
  window.location.href = ("form.html")
}