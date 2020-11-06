let form      = document.querySelector('#form');
let btnSubmit = document.querySelector('#btn-submit');
let inputForm = form.elements;
let inputEmail = inputForm.email;
let inputName = inputForm.name;
let inputPass = inputForm.pass;
let inputRepeat = inputForm.repeat;
let objResult = {};

form.oninput = function(e) {
    if (inputEmail.value.includes('@')) {
        e.target.classList.add('_is-success')
    } else {
        e.target.classList.remove('_is-success')
    }

    if (inputName.value.length != 0) {
        e.target.classList.add('_is-success')
    } else {
        e.target.classList.remove('_is-success')
    }

    if (inputPass.value.length > 3) {
        e.target.classList.add('_is-success')
    } else {
        e.target.classList.remove('_is-success')
    }
}