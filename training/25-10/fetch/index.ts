const main = <HTMLDivElement>document.querySelector("#main");
main.innerHTML = "Fetching Data ....";
getData("https://jsonplaceholder.typicode.com/todos").then(function(data){
    console.log(data);
    data.forEach((item: { id: number; title: string }) => {
        const p = document.createElement("p");
        p.id = `task_${item.id}`;
        p.innerHTML = `<b>${item.title}</b>`;
        main.appendChild(p);
      });
}).catch(function(e) {
    console.error('Error occuerred', e);
});
main.innerHTML += "<br>List processing done...";

async function getData(url:string): Promise<any> {
    const response = await fetch(url);
    return response.json();
}