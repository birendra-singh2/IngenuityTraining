"use strict";
//// String
// Anything inside "", '', `${x}` -> template string.
console.log("Hello !!");
console.log("JavaScript !!");
var x = 2;
console.log("This is string template " + x);
console.log(String(100000));
var str = "This is javascript string";
console.log(str.charAt(3), str.charCodeAt(3));
console.log(str.includes("java"), str.indexOf("i", 6), str.indexOf("my"));
console.log(str.toLowerCase(), str.toUpperCase());
console.log(str.replace("java", "Type"));
console.log(str.replaceAll(" ", "&"));
console.log(str, reverseString(str));
console.log(str.substr(3, 10));
console.log(str.substring(3, 15));
console.log("Palan noon", palandrome("noon"));
console.log(str.concat(" and typescript too"));
function reverseString(str) {
    return str.split("").reverse().join("");
}
function palandrome(str) {
    return reverseString(str) === str;
}
/// Number
console.log(Number("100.1"), Number("#12345"), Number("1234#768"));
console.log(parseInt("100.001"), parseInt("#12345"), parseInt("1234#768"), parseInt("fa", 16));
console.log(parseFloat("100.0001"), parseFloat("#12345"), parseFloat("1234#768"));
console.log((22 / 7).toFixed(5));
console.log((255).toString(16));
console.log((255).toString(8));
console.log((255).toString(2));
console.log(100000000);
console.log((100000000).toExponential(3));
///Array
var a = new Array();
var b = new Array(5);
var c = [];
var d = ["Sun", "Mon", "Tue"];
b.fill(0, 0, 5);
b[6] = 8;
console.log(a, b, c, d);
console.log(d[1]);
b.length = 50;
console.log(b.length);
// b.length = 0;
console.log(b[2], b);
console.log(d.includes("Tue"), d.includes("Wed"));
console.log((d = d.concat("Wed", "Thu", "Fri", "Sat")));
console.log(d.push("Jan"), d.pop());
console.log(d.unshift("Jan"), d);
console.log(d.shift());
console.log(d);
console.log(d.filter(function (day) { return day.charAt(0) !== "T"; }));
console.log(d.filter(function (day) { return day.includes("e"); }));
console.log(b.map(function (num, i) { return (typeof num === "number" ? num + i : 0); }));
console.log(b.forEach(function (num, i, arr) { return arr[i] = (typeof num === "number" ? num * i : 0); }));
console.log(b);
for (var i = 0; i < b.length; i++) {
    b[i] = (typeof b[i] === "number" ? b[i] + i : 0);
}
console.log(b);
///Set
var s = new Set();
s.add('ankush');
s.add('Saurabh');
s.add('Jitendra');
s.add('Preeti');
s.add('ankush');
console.log(s.keys());
console.log(s);
/// Map
var m = new Map();
m.set('ankush', 'sharma');
m.set('saurabh', 'Srivastva');
m.set('Jitendra', 'Singh');
m.set('Preeti', 'Thakur');
m.set('Preeti', 'Sehgal');
m.set('khushpal', 'sharma');
console.log(m);
/// Objects and JSON.
var y = new Object();
var person = {
    name: "Ankush Sharma",
    age: 41,
    print: function () {
        console.log(this.name + " is " + this.age + " years old");
    }
};
person.print();
var student = {
    name: "Ramesh Sharma",
    age: 16,
    studying: true
};
console.log(y, person, student);
// Date
var date = new Date();
console.log(date.getDate().toString().padStart(2, '0') + "-" + (date.getMonth() + 1).toString().padStart(2, '0') + "-" + date.getFullYear());
console.log(d[date.getDay()], date.getDay());
var clockDiv = document.querySelector("#clock");
// setTimeout(function(){
//     clockDiv.innerText = `${date.getMinutes()}:${date.getSeconds()}`;
// }, 1000);
setInterval(function () {
    date = new Date();
    clockDiv.innerText = d[date.getDay()] + " " + date.getHours().toString().padStart(2, '0') + ":" + date.getMinutes().toString().padStart(2, '0') + ":" + date.getSeconds().toString().padStart(2, '0');
}, 500);
/// Math
var rand = Math.random();
console.log(rand, Math.floor(rand), Math.ceil(rand), Math.round(rand), rand.toFixed(2));
console.log(Math.max.apply(Math, b));
console.log(Math.sqrt(79));
console.log(Math.sin(90), Math.sin(Math.PI / 2));
console.log(Math.cos(0), Math.sin(Math.PI / 4));
console.log(Math.tan(0), Math.tan(Math.PI / 4));
