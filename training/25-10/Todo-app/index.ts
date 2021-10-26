const input = <HTMLInputElement>document.querySelector("#task-input");
const addBtn = <HTMLInputElement>document.querySelector("#task-add");
const list = <HTMLUListElement>document.querySelector("#task-list");

window.addEventListener("load", function () {
  const listData = getListData();
  if (listData) {
    list.innerHTML = atob(listData);
  }
  list.addEventListener("click", onListClicked);
});

addBtn.addEventListener("click", function () {
  const task = input.value;
  if (task) {
    const taskSpan = <HTMLSpanElement>document.createElement("span");
    const ctrlSpan = <HTMLSpanElement>document.createElement("span");
    const taskItem = <HTMLLIElement>document.createElement("li");
    taskSpan.id = "task-text";
    taskSpan.innerText = task;
    ctrlSpan.id = "task-del";
    ctrlSpan.classList.add("del-btn");
    ctrlSpan.innerHTML = "Delete";

    taskItem.append(taskSpan, ctrlSpan);
    list.appendChild(taskItem);
    saveList();
    input.value = "";
  } else {
      alert("Please enter a task before adding.")
  }
  input.focus();
});

function onListClicked(e: MouseEvent): void {
    console.log(e);
  const target = <HTMLLIElement>e.target;
  switch (target.id) {
    case "task-text":
      target.classList.toggle("done");
      break;
    case "task-del":
      target.parentElement?.remove();
      break;
  }
  saveList();
}

function saveList(): void {
  localStorage.setItem("todo-list", btoa(list.innerHTML));
}

function getListData(): string | null {
  return localStorage.getItem("todo-list");
}
