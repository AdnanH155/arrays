// 1
function add(num1, num2) {
  return num1 + num2;
}
console.log(add(5, 2));
// 2 a, b, c
var arr = ["saka", "martenelli", "odegaard"];
arr.reverse();
console.log(arr);
// 4, 5, 6
var arr = [
  "white",
  "saliba",
  "gabriel",
  "zinchenko",
  "rice",
  "harvertz",
  "odegaard",
  "martenelli",
  "jesus",
  "saka",
];
// splice
arr.splice(0, 1, "timber");
console.log(arr);
// length
arr.length = 5;
console.log(arr);
// pop
console.log(arr.pop(), arr);
// push
arr.push("partey");
console.log(arr);
// shift
console.log(arr.shift(), arr);
// unshift
arr.unshift("ramsdale");
console.log(arr);
// Concatenating
var arr1 = ["white", "saliba"];
var arr2 = ["gabriel", "zinchenko"];
var combined = arr1.concat(arr2);
console.log(combined);
// slicing
var arr1 = ["white", "saliba"];
var copy = arr1.slice(0, 2);
console.log(arr1, copy);
// reverse
var arr = ["white", "saliba", "gabriel", "zinchenko"];
arr.reverse();
console.log(arr);
// join
var number = [1, 2, 3, 4];
console.log(number.join("-"));
// forEach
var arr = [1, 2, 3, "saka", "odegaard"];
arr.forEach(function (item, index) {
  console.log(item, index);
});
// include
var arr = [1, 2, 3, "saka", "odegaard"];
console.log(arr.includes("saka"));
// indexOf
var arr = ["white", "saliba", "gabriel", "zinchenko", "saliba"];
console.log(arr.indexOf("saliba", 1));
// every
var arr = [
  { appleId: 111, quantity: 1 },
  { bananaId: 222, quantity: 1 },
  { carrotId: 333, quantity: 1 },
  { pearId: 444, quantity: 1 },
  { orangeId: 555, quantity: 0 },
];
console.log(
  arr.every(function (item) {
    if (item.quantity) {
      return true;
    } else {
      return false;
    }
  })
);
// Some
var arr = [
  { productId: 1, quantity: 1 },
  { productId: 2, quantity: 1 },
  { productId: 3, quantity: 1 },
  { productId: 4, quantity: 0 },
  { productId: 5, quantity: 0 },
];
console.log(
  arr.some(function (item) {
    if (item.quantity) {
      return true;
    }
  })
);
// Filter
var arr = [
  { productId: 1, price: 100 },
  { productId: 2, price: 125 },
  { productId: 3, price: 250 },
  { productId: 4, price: 300 },
  { productId: 5, price: 375 },
];

console.log(
  arr.filter(function (item) {
    if (item.price > 200) {
      return true;
    }
  })
);
// Find
var arr = [
  { productId: 1, price: 100 },
  { productId: 2, price: 125 },
  { productId: 3, price: 250 },
  { productId: 4, price: 300 },
  { productId: 5, price: 375 },
];
console.log(
  arr.find(function (item) {
    if (item.productId === 3) {
      return true;
    }
  })
);
// findIndex
var arr = [
  { productId: 1, quantity: 1 },
  { productId: 2, quantity: 1 },
  { productId: 3, quantity: 1 },
  { productId: 4, quantity: 1 },
  { productId: 5, quantity: 1 },
];
console.log(
  arr.findIndex(function (item) {
    if (item.productId === 4) {
      return true;
    }
  })
);
// Sort
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 5, 6, 7, 8, 9];
console.log(
  arr.sort(function (item1, item2) {
    if (item1 > item2) {
      return 1;
    }
    if (item1 < item2) {
      return -1;
    }
    return 0;
  })
);
