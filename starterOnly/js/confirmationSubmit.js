    // DOM elements confirmation submit
const modalSubmit = document.getElementsByClassName('container-confirmation-submit');
const closeModalSubmit = document.getElementsByClassName('close-modal-submit');
const closeBtnConfirmation = document.getElementById('close-btn-confirmation');


            // confirmation du submit

    // afficher message de confirmation
function displayModalSubmit() {
    modalbg.style.display = 'none';
    modalSubmit[0].style.display = 'block';
}

    // fermer message de confirmation
function closeSubmit() {
    modalbg.style.display = 'none';
    
}

    // évènement fermeture message de confirmation
closeModalSubmit[0].addEventListener('click', closeSubmit);
closeBtnConfirmation.addEventListener('click', closeSubmit);

