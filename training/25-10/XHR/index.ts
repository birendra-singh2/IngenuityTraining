const main = <HTMLDivElement>document.querySelector("#main");
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/todos");
main.innerHTML = "Fetching Data ....";
xhr.send();
xhr.onload = function () {
  console.log(xhr);
  const data = JSON.parse(xhr.response);
  data.forEach((item: { id: number; title: string }) => {
    const p = document.createElement("p");
    p.id = `task_${item.id}`;
    p.innerHTML = `<b>${item.title}</b>`;
    main.appendChild(p);
  });
};
main.innerHTML += "<br>List processing done...";
