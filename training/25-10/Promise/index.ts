console.log(" it all begins");
const p = new Promise(function (
  resolve: (value: unknown) => void,
  reject: () => void
) {
  console.log(" Inside promise body");
  setTimeout(function () {
    console.log("resolving the task");
    if (Math.random() > 0.8) {
      reject();
    } else {
      resolve("hurray!!");
    }
  }, 1000);
});
(async () => {
 let data = await p;
 console.log('after await ', data);
})();
console.log("Promise ends here!!");
