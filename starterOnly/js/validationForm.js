    // DOM Elements validations formulaire
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const quantity = document.getElementById('quantity');
const birthdate = document.getElementById('birthdate');
const allLocations = document.getElementById('allLocations');
const locations = document.querySelectorAll('#allLocations .checkbox-input');
const checkbox1 = document.getElementById('checkbox1');
const input = document.getElementsByClassName('text-control');
const form = document.getElementById('form');
const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;

    // Validation formulaire
function checkFirstName() {
    if (firstName.value.trim().length < 2 || last.value.trim() === '' || !firstName.value.trim().match(regex)) {
        firstName.parentElement.setAttribute('data-error-visible', 'true');
        firstName.style.border = '1px solid #fe142f';
        return false;
    }
    firstName.parentElement.setAttribute('data-error-visible', 'false');
    firstName.style.border = 'solid #ccc 0.2rem';
    return true;
}


    // Conditions de verification du formulaire check
function checkCheckbox() {
    if (checkbox1.checked === false) {
        checkbox1.parentElement.setAttribute('data-error-visible', 'true');
        return false;
    }
    checkbox1.parentElement.setAttribute('data-error-visible', 'false');
    return true;
}


    // événement sur les champs du formulaire
function formFieldsValidation(element, method, event) {
    element.addEventListener(event, method);
}
formFieldsValidation(firstName, checkFirstName, 'focusout');


    // Validation des champs du formulaire
function forAllFieldsValidation() {
    checkFirstName();
    // checkLastName();

}   

function formValidation() {
    if (checkFirstName() === true 

    ) {
        return true;
    }
    return false;
}


    // Envoi du formulaire
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (formValidation() === true) {
        displayModalSubmit();
        document.querySelector('form').reset();
    } else {
        forAllFieldsValidation();
    }
});