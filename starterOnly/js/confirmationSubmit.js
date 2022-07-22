    // DOM elements confirmation submit
const modalSubmit = document.getElementsByClassName('container-confirmation-submit');
const closeModalSubmit = document.getElementsByClassName('close-modal-submit');
const closeBtnConfirmation = document.getElementById('close-btn-confirmation');


            // confirmation du submit

    // afficher modal
function displayModalSubmit() {
    modalbg.style.display = 'none';
    modalSubmit[0].style.display = 'block';
}

    // fermer modal
function closeSubmit() {
    modalSubmit[0].style.display = 'none';
}

    // évènement fermeture modal
closeModalSubmit[0].addEventListener('click', closeSubmit);
closeBtnConfirmation.addEventListener('click', closeSubmit);

