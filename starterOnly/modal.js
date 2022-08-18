// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.getElementsByClassName("close");

  // launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

  // launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

  // close modal form
function closeModal() {
  modalbg.style.display = "none";
}
closeBtn[0].addEventListener("click", closeModal);

  // ------ display nav responsive ------ //
  // edit nav
function editNav() {
  
  const mobileNavbar = document.getElementById("mobile-navbar");
  if (mobileNavbar.style.display === "none") {
    mobileNavbar.style.display = "block";
  } else {
    
    mobileNavbar.style.display = "none";
  }
}