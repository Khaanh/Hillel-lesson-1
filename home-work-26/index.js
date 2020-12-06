let requestBtn = document.querySelector('#request');
let inputValue = document.querySelector('#postID');
let requestPost = document.querySelector('#request-post');
let requestComment = document.querySelector('#request-comment');
let url = "https://jsonplaceholder.typicode.com/posts";



requestBtn.addEventListener('click', function() {
    let id = inputValue.value;

    console.log(id);
    fetch(`${url}/${id}`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        requestPost.innerHTML = JSON.stringify(data);
        return getComments(id);
    })
})

function getComments(commentId) {
    fetch(`${url}/${commentId}/comments`)
    .then(response => {
        return response.json();
    })
    .then(comments => {
        requestComment.innerHTML = JSON.stringify(comments)
        console.log(comments);
    })
}