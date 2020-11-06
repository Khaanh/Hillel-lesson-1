let ul = document.querySelector('#todo-list');
let menuBtn = document.querySelector('#menu-btn');

//Отключаем выделение списка
ul.addEventListener('mousedown', function (e) {
    e.preventDefault();
})

ul.addEventListener('click', function (e) {
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


menuBtn.addEventListener('click', function(e) {
    let action = e.target.dataset.action;
    let li = document.createElement('li');
    console.log(ul.children);
    switch (action) {
        case 'addStart': {
            let newTask = prompt('Введите название таска:', '');
            li.innerHTML = newTask;
            ul.prepend(li)
            break;
        }
        case 'addEnd': {
            let newTask = prompt('Введите название таска:', '');
            li.innerHTML = newTask;
            ul.append(li)
            break;
        }
        case 'remove': {
            let elems = ul.children;
            let newArr = [];
            for (elem of elems) {
                console.log(elem);
                if (elem.classList.contains('selected')) {
                    elem.remove();
                }
            }
            break;
        }
        case 'sort': {
            break;
        }
        default:
            break;
    }
})
