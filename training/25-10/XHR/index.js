"use strict";
var main = document.querySelector("#main");
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/todos");
main.innerHTML = "Fetching Data ....";
xhr.send();
xhr.onload = function () {
    console.log(xhr);
    var data = JSON.parse(xhr.response);
    data.forEach(function (item) {
        var p = document.createElement("p");
        p.id = "task_" + item.id;
        p.innerHTML = "<b>" + item.title + "</b>";
        main.appendChild(p);
    });
};
main.innerHTML += "<br>List processing done...";
