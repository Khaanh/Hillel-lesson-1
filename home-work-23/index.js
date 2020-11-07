let form      = document.querySelector('#form');
let btnSubmit = document.querySelector('#btn-submit');
let inputEmail = form.elements.email;
let inputName = form.elements.name;
let inputPass = form.elements.pass;
let inputRepeat = form.elements.repeat;
let objResult = {};
let span = document.createElement('span');
let emailError = 'Неправильный формат почты';
let nameError = 'Вы пропустили имя';
let passError = 'Пароль должен быть длиней 6 символов';
let repeatPassError = 'Пароли не совпадают';
let password;
    
form.oninput = function(e) {
    
    if (inputEmail.value.includes('@')) {
        inputEmail.classList.add('_is-success')
    } else {
        inputEmail.classList.remove('_is-success')
    }

    if (inputName.value.length) {
        inputName.classList.add('_is-success')
    } else {
        inputName.classList.remove('_is-success')
    }

    if (inputPass.value.length > 3) {
        password = inputPass.value;
        inputPass.classList.add('_is-success')
    } else {
        inputPass.classList.remove('_is-success')
    }

    if (inputRepeat.value == password) {
        inputRepeat.classList.add('_is-success')
    } else {
        inputRepeat.classList.remove('_is-success')
    }

    if ((inputEmail.classList.contains('_is-success')) &&
        (inputName.classList.contains('_is-success')) &&
        (inputPass.classList.contains('_is-success')) &&
        (inputRepeat.classList.contains('_is-success'))) {
            btnSubmit.removeAttribute('disabled')
            objResult.email = inputEmail.value;
            objResult.name = inputName.value;
            objResult.pass = inputPass.value; 
            objResult.passRepeat = inputRepeat.value; 
        } else {
            btnSubmit.setAttribute('disabled', true)
        }
}

form.addEventListener('submit', function(e) {
    console.dir(objResult);
    e.preventDefault();
})