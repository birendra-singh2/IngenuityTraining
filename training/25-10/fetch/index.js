"use strict";
var main = document.querySelector("#main");
main.innerHTML = "Fetching Data ....";
fetch("https://jsonplaceholder.typicode.com/todos").then(function (response) {
    return response.json();
}).then(function (data) {
    console.log(data);
    data.forEach(function (item) {
        var p = document.createElement("p");
        p.id = "task_" + item.id;
        p.innerHTML = "<b>" + item.title + "</b>";
        main.appendChild(p);
    });
}).catch(function (e) {
    console.error('Error occuerred', e);
});
main.innerHTML += "<br>List processing done...";
