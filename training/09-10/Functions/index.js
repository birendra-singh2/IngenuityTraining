"use strict";
///// Functions
function sum(x, y) {
    return x + y;
}
var multiply = function (x, y) {
    return x * y;
};
var divide = function (x, y) {
    if (y !== 0) {
        return x / y;
    }
    return Number.POSITIVE_INFINITY;
};
console.log("Sum, mul, div", sum(5, 10), multiply(5, 10), divide(5, 10));
function fact(num) {
    if (num <= 1) {
        return num;
    }
    return fact(num - 1) * num;
}
console.log("Factoral", fact(5));
////
function sumNew(x, y) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    console.log("arguments ", arguments);
    var sum = x + y;
    for (var i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}
console.log(sumNew(5, 10));
console.log(sumNew(5, 10, 15));
console.log(sumNew(5, 10, 15, 20));
console.log(sumNew(5, 10, 15, 20, 25));
console.log(sumNew.call(null, 1, 2, 3));
console.log(sumNew.apply(null, [1, 2, 3, 4, 5]));
var sumMoreNew = sumNew.bind(null);
console.log(sumMoreNew(1, 2, 3));
