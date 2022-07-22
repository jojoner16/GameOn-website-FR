    // DOM elements validations formulaire
const modalBg = document.querySelector('.container-confirmation-submit');
const closeBt = document.getElementsByClassName('close-modal-submit');
const closeButton = document.getElementById('close-btn-confirmation');
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

                                //----- Validation formulaire ------//

    // Vérification des nom et prénom
function checkFirstName() {
    if (firstName.value.trim().length < 2 || firstName.value.trim() === '' || !firstName.value.match(regex)) {
        firstName.parentElement.setAttribute('data-error-visible', 'true');
        firstName.style.border = 'solid #fe142f 0.2rem';
        return false;
    }
    first.parentElement.setAttribute('data-error-visible', 'false');
    first.style.border = 'solid #279e7a 0.2rem';
    return true;
}

function checkLastName() {
    if (lastName.value.trim().length < 2 || lastName.value.trim() === '' || !lastName.value.match(regex)) {
        lastName.parentElement.setAttribute('data-error-visible', 'true');
        lastName.style.border = 'solid #fe142f 0.2rem';
        return false;
    }
    last.parentElement.setAttribute('data-error-visible', 'false');
    last.style.border = 'solid #279e7a 0.2rem';
    return true;
}


    // Validation de l'email
function checkEmail() {
    const reg = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    if (email.value.trim().match(reg)) {
        email.parentElement.setAttribute('data-error-visible', 'false');
        email.style.border = 'solid #279e7a 0.2rem';
        return true;
    }
    email.parentElement.setAttribute('data-error-visible', 'true');
    email.style.border = 'solid #fe142f 0.2rem';
    return false;
}


    // Validation de la date de naissance
function checkBirthdate() {
    if (birthdate.value.trim().length !== 10) {
        birthdate.parentElement.setAttribute('data-error-visible', 'true');
        birthdate.style.border = 'solid #fe142f 0.2rem';
        return false;
    }
    birthdate.parentElement.setAttribute('data-error-visible', 'false');
    birthdate.style.border = 'solid #279e7a 0.2rem';
    return true;
}


    // Validation du nombre de tournois
function checkTournamentsQuantity() {
    if (quantity.value.trim().length === 0 || isNaN(quantity.value.trim()) === true || quantity.value.trim() < 0) {
        quantity.parentElement.setAttribute('data-error-visible', 'true');
        quantity.style.border = 'solid #fe142f 0.2rem';
        return false;
    }
    quantity.parentElement.setAttribute('data-error-visible', 'false');
    quantity.style.border = 'solid #279e7a 0.2rem';
    return true;
}


    // Validation des localisations
function checkLocations() {
    allLocations.setAttribute('data-error-visible', 'true');
    for (let i = 0; i < locations.length; i++) {
        if (locations[i].checked) {
            allLocations.setAttribute('data-error-visible', 'false');
            return true;
        }
    }
    return false;
}


    // Vérification des conditions d'utilisation du formulaire
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
formFieldsValidation(lastName, checkLastName, 'focusout');
formFieldsValidation(email, checkEmail, 'focusout');
formFieldsValidation(birthdate, checkBirthdate, 'focusout');
formFieldsValidation(quantity, checkTournamentsQuantity, 'focusout');
formFieldsValidation(allLocations, checkLocations, 'change');
formFieldsValidation(checkbox1, checkCheckbox, 'change');


    // Validation des champs du formulaire
function forAllFieldsValidation() {
    checkFirstName();
    checkLastName();
    checkEmail();
    checkBirthdate();
    checkTournamentsQuantity();
    checkLocations();
    checkCheckbox();
}   

function formValidation() {
    if (checkFirstName() === true &&
        checkLastName() === true &&
        checkEmail() === true &&
        checkBirthdate() === true &&
        checkTournamentsQuantity() === true &&
        checkLocations() === true &&
        checkCheckbox() === true) {
        return true;
    }
    return false;
}


    // Envoi du formulaire
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (formValidation() == true) {
        modalBg.style.display = 'block';
    } else {
        forAllFieldsValidation();
    }
});


