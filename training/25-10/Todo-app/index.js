"use strict";
var input = document.querySelector("#task-input");
var addBtn = document.querySelector("#task-add");
var list = document.querySelector("#task-list");
window.addEventListener("load", function () {
    var listData = getListData();
    if (listData) {
        list.innerHTML = atob(listData);
    }
    list.addEventListener("click", onListClicked);
});
addBtn.addEventListener("click", function () {
    var task = input.value;
    if (task) {
        var taskSpan = document.createElement("span");
        var ctrlSpan = document.createElement("span");
        var taskItem = document.createElement("li");
        taskSpan.id = "task-text";
        taskSpan.innerText = task;
        ctrlSpan.id = "task-del";
        ctrlSpan.classList.add("del-btn");
        ctrlSpan.innerHTML = "Delete";
        taskItem.append(taskSpan, ctrlSpan);
        list.appendChild(taskItem);
        saveList();
        input.value = "";
    }
    else {
        alert("Please enter a task before adding.");
    }
    input.focus();
});
function onListClicked(e) {
    var _a;
    console.log(e);
    var target = e.target;
    switch (target.id) {
        case "task-text":
            target.classList.toggle("done");
            break;
        case "task-del":
            (_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
            break;
    }
    saveList();
}
function saveList() {
    localStorage.setItem("todo-list", btoa(list.innerHTML));
}
function getListData() {
    return localStorage.getItem("todo-list");
}
