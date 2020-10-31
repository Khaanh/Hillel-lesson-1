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
    console.log(target);
}

startTask.addEventListener('click', function() {
    let newTask = prompt('Введите название таска:', '');
    console.log(newTask);
    let li = document.createElement('li');
    li.innerHTML = newTask;
    ul.prepend(li)
})

endTask.addEventListener('click', function() {
    let newTask = prompt('Введите название таска:', '');
    console.log(newTask);
    let li = document.createElement('li');
    li.innerHTML = newTask;
    ul.append(li)
})


function removeSelectedTask(target){
    removeTask.addEventListener('click', function(target) {
        target.classList.add('adsasdasdasd')
    })
}
// removeSelectedTask();

