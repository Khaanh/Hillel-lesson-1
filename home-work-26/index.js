let requestBtn = document.querySelector('#request');

requestBtn.addEventListener('click', function() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        console.log(response);

        return response
    })
    .then(data => {
        data.json()
        console.log(data);
    })
})