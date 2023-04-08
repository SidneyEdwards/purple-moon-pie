// Added JS for Modal (delete if this isn't what group agrees on.)

// Modal 1
var modalButton1 = document.getElementById("modal-btn1");
var span = document.getElementsByClassName("close")[0];


function openModal1() {

  var modal = document.getElementById("modal-project-1");

  function openModal() {
    modal.style.display = "block";
    return;
  }

  openModal()
  
  span.onclick = function() {
    modal.style.display = "none";
    return;
  }
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      return;
    }
  }
  return;
}

modalButton1.addEventListener("click", openModal1)

// Modal 2

var modalButton2 = document.getElementById("modal-btn2");


function openModal2() {

  var modal = document.getElementById("modal-project-2");
  var span2 = document.getElementsByClassName("close")[0];

  function openModal() {
    modal.style.display = "block";
    return;
  }

  openModal()
  
  
  span2.onclick = function() {
    modal.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  return;
}

modalButton2.addEventListener("click", openModal2)

// Modal 3


var modalButton3 = document.getElementById("modal-btn3");


function openModal3() {

  var modal = document.getElementById("modal-project-2");
  var span = document.getElementsByClassName("close")[0];

  function openModal() {
    modal.style.display = "block";
  }

  openModal3()
  
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  return;
}

modalButton3.addEventListener("click", openModal3)
