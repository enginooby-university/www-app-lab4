$(function () {
    let postIdField = document.querySelector("#postId");
    let titleSection = document.querySelector("#title");
    let contentSection = document.querySelector("#content");
    let submitButton = document.querySelector("#submit");

    let postId;
    const baseURL = "https://jsonplaceholder.typicode.com/posts/";

    function getPost() {
        postId = postIdField.value;
        let endpoint = baseURL + postId;

        $.getJSON(endpoint, function (data) {
            titleSection.innerHTML = data.title;
            contentSection.innerHTML = data.body;
        });
    };

    submitButton.addEventListener('click', getPost);
});