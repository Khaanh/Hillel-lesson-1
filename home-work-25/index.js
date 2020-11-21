const url = 'https://jsonplaceholder.typicode.com/';
const photoUrl = 'photos';
let photoHistory = [];

let photContainer = document.querySelector('.photo-container');
let request = document.querySelector('#request');
let add = document.querySelector('#add');
let photoInput = document.querySelector('#photoInput');

request.addEventListener('click', main);
photoInput.addEventListener('keyup', (event) => {
    if (event.key === "Enter") {
        main()
    } else {
        event.preventDefault()
    }
});

async function main() {
    let id = photoInput.value;
    if (!isNaN(id)) {
        photoInput.disabled = true;
        
        const response = await fetch(`${url}${photoUrl}/${id}`);
        const data = await response.json();
        console.log('data: ', data);
        const obj = await loadImage(data);
        console.log('obj: ', obj);

        photContainer.append(obj.image);
        photoHistory.push(data);
        console.log(photoHistory);
        photoInput.disabled = false;
        photoInput.focus();
    }
}

function loadImage(data) {
    return new Promise(function (resolve, reject) {
        let image = new Image();
        image.src = data.url;
        image.onload = () => resolve({
            image,
            data
        });
        image.onerror = () => reject();
    })
}

let newPhoto = {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952"
}

async function addPhoto(imgObj) {
    imgObj = JSON.stringify(imgObj);

    try {
        let res = await fetch(`${url}${photoUrl}`, { method: 'PUT', body: imgObj})
        console.log(res);
    } catch(error) {
        console.log(error);
    }
}

add.onclick = () => {
    addPhoto(newPhoto);
}