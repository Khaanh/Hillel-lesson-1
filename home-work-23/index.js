let form      = document.querySelector('#form');
let btnSubmit = document.querySelector('#btn-submit');

let inputEmail = form.elements.email;
let inputName = form.elements.name;
let inputPass = form.elements.pass;
let inputRepeat = form.elements.repeat;

let objResult = {};
let span = document.createElement('span');
let emailError = 'Неправильный формат почты';
let nameError = 'Слишком короткое имя';
let passError = 'Пароль должен быть длиней 3 символов';
let repeatPassError = 'Пароли не совпадают';

let flagEmail = false;
let flagName = false;
let flagPass = false;
let flagRepeat = false;


form.oninput = function(e) {
    let target = e.target;

    console.log(email);

    if (target.type === 'email' && target.value.includes('@')) {
        target.classList.add('_is-success');
        console.log(target);
        flagEmail = true;
        span.remove();
    } else {
        console.log(target);
        span.classList.add('error');
        span.innerHTML = emailError;
        target.after(span);
        target.classList.add('_is-error')
        target.classList.remove('_is-success')
    }
    
    // if (target.type == 'text' && target.value.length > 2) {
    //     target.classList.add('_is-success');
    //     console.log(target);
    //     flagName = true;
    //     span.remove();
    // } else {
    //     console.log(target);
    //     span.classList.add('error');
    //     span.innerHTML = nameError;
    //     target.after(span);
    //     target.classList.add('_is-error')
    //     target.classList.remove('_is-success')
    // }

}


// function validateForm() {
//     let passValue;

//     inputEmail.oninput = function(e) {
//         let target = e.target;
//         if (target.value.includes('@')) {
//             target.classList.add('_is-success');
//             flagEmail = true;
//             span.remove();
//         } else {
//             span.classList.add('error');
//             span.innerHTML = emailError;
//             target.after(span);
//             target.classList.add('_is-error')
//             target.classList.remove('_is-success')
//         }
//     }
    
//     inputName.oninput = function(e) {
//         let target = e.target;
//         if (inputName.value.length > 2) {
//             target.classList.add('_is-success');
//             flagName = true;
//             span.remove();
//         } else {
//             span.classList.add('error');
//             span.innerHTML = nameError;
//             target.after(span);
//             target.classList.add('_is-error')
//             target.classList.remove('_is-success')
//         }
//     }
    
//     inputPass.oninput = function(e) {
//         let target = e.target;
//         if (inputPass.value.length > 2) {
//             passValue = inputPass.value;
//             target.classList.add('_is-success');
//             flagPass = true;
//             span.remove();
//         } else {
//             span.classList.add('error');
//             span.innerHTML = passError;
//             target.after(span);
//             target.classList.add('_is-error')
//             target.classList.remove('_is-success')
//         }
//     }
    
//     inputRepeat.oninput = function(e) {
//         let target = e.target;
//         if (inputRepeat.value == passValue) {
//             target.classList.add('_is-success');
//             flagRepeat = true;
//             span.remove();
//         } else {
//             span.classList.add('error');
//             span.innerHTML = repeatPassError;
//             target.after(span);
//             target.classList.add('_is-error')
//             target.classList.remove('_is-success')
//         }
//     }
// }validateForm();


// form.oninput = function() {
//     if (flagEmail && flagName && flagPass && flagRepeat) {
//         btnSubmit.removeAttribute('disabled')
//         objResult.email = inputEmail.value;
//         objResult.name = inputName.value;
//         objResult.pass = inputPass.value; 
//         objResult.passRepeat = inputRepeat.value; 
//     } else {
//         btnSubmit.setAttribute('disabled', true)
//     }
// }

// form.addEventListener('submit', function(e) {
//     console.dir(objResult);
//     e.preventDefault();
// })