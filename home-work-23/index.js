let form      = document.querySelector('#form');
let btnSubmit = document.querySelector('#btn-submit');
let inputForm = form.elements;
let inputEmail = inputForm.email;
let inputName = inputForm.name;
let inputPass = inputForm.pass;
let inputRepeat = inputForm.repeat;
let objResult = {};

inputForm.email.oninput = function() {
    if (!this.value.length) {
        console.log('пустое поле');
    } else {
        objResult = {
            email: this.value,
        }
        console.log(objResult);
        console.log('заполненное поле');
    }
}