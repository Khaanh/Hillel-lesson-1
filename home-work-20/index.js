let ul = document.querySelector('#todo-list');

//Отключаем выделение списка
ul.addEventListener('mousedown', function (e) {
    e.preventDefault();
})

ul.addEventListener('click', function (e) {
    console.log(e);

    if (e.target == this) {
        return false;
    }
    if (!e.ctrlKey) {
        clearSelected(this.children);
    } 
    addSelected(e.target);
})

function clearSelected(elems) {
    for (let elem of elems) {
        console.log(elem.classList.remove('selected'));
    }
}

function addSelected(target) {
    target.classList.add('selected');
}
let menu = document.querySelector('#menu');