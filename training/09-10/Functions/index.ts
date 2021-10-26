///// Functions
function sum(x: number, y: number): number {
  return x + y;
}

let multiply = function (x: number, y: number): number {
  return x * y;
};

let divide = (x: number, y: number): number => {
  if (y !== 0) {
    return x / y;
  }
  return Number.POSITIVE_INFINITY;
};

console.log("Sum, mul, div", sum(5, 10), multiply(5, 10), divide(5, 10));

function fact(num: number): number {
  if (num <= 1) {
    return num;
  }
  return fact(num - 1) * num;
}

console.log("Factoral", fact(5));

////
function sumNew(x: number, y: number, ...args: number[]): number {
  console.log("arguments ", arguments);
  let sum: number = x + y;
  for (let i = 0; i < args.length; i++) {
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

let sumMoreNew = sumNew.bind(null);

console.log(sumMoreNew(1,2,3));


