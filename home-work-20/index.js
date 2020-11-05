let ul = document.querySelector('#todo-list');
let startTask = document.querySelector('#add-start');
let endTask = document.querySelector('#add-end');
let removeTask = document.querySelector('#remove-task');

//Отключаем выделение списка
ul.addEventListener('mousedown', function (e) {
    e.preventDefault();
})

ul.addEventListener('click', function (e) {
    // console.log(e);
    if (e.target == this) {
        return false;
    }
    // if (!e.ctrlKey) {
    //     clearSelected(this.children);
    // }
    
    toggleSelect(e.target)
})

function clearSelected(elems) {
    for (let elem of elems) {
        elem.classList.remove('selected')
    }
}

function toggleSelect(target) {
    target.classList.toggle('selected');
}

startTask.addEventListener('click', function() {
    let newTask = prompt('Введите название таска:', '');
    let li = document.createElement('li');
    li.innerHTML = newTask;
    ul.prepend(li)
})

endTask.addEventListener('click', function() {
    let newTask = prompt('Введите название таска:', '');
    let li = document.createElement('li');
    li.innerHTML = newTask;
    ul.append(li)
})


removeTask.addEventListener('click', function() {
    let elems = ul.children;
    
    for (let elem of elems) {
        if (elem.classList.contains('selected')) {
            elem.remove();
        }
    }
})
