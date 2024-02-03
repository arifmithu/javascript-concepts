let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = [
  "ajd",
  "hello",
  "world",
  "this",
  "is",
  "my",
  "task",
  "to",
  "solve",
  "now",
];
let arr3 = [
  [1, 2, 3],
  [4, 6],
  [3, 4],
  [5, 6, 7],
  [8, 9, 10],
];
let arr4 = [
  { a: 2, b: 3 },
  { a: 4, b: 5 },
  { a: 6, b: 7 },
  { a: 8, b: 9 },
  { a: 10, b: 11 },
  { a: 12, b: 13 },
  { a: 14, b: 15 },
];
let arr5 = [
  { nums: [5, 4], nums2: [1, 2] },
  { nums: [2, 3], nums2: [4, 5] },
  { nums: [6, 7], nums2: [8, 9] },
];

// first function
let doubleArr = arr.map((val) => {
  let double = val * 2;
  return double;
});
console.log(doubleArr);

// second function
let reversedArr = arr2.map((val) => {
  let reversed = "";
  for (let i = val.length - 1; i >= 0; i--) {
    reversed += val[i];
  }
  return reversed;
});
console.log(reversedArr);

// third function
let arrOfSum = arr3.map((val) => {
  let sum = 0;
  for (let i = 0; i < val.length; i++) {
    sum += val[i];
  }
  return sum;
});
console.log(arrOfSum);

// fourth function
let arrOfSumOfObject = arr4.map((val) => {
  let sum = 0;
  for (const key in val) {
    sum += val[key];
  }
  return sum;
});
console.log(arrOfSumOfObject);

// fifth function
let arrOfMultiOfObject = arr5.map((val) => {
  let multi = 1;
  for (const key in val) {
    let sum = 0;
    let arrOfObj = val[key];
    for (const value of arrOfObj) {
      sum += value;
    }
    multi *= sum;
  }
  return multi;
});
console.log(arrOfMultiOfObject);

// 2D arr

let subArrOfMultiOfObject = arr5.map((val) => {
  let sub = [];
  let gotArrForMulti = val["nums"];
  let multi = 1;
  for (const item of gotArrForMulti) {
    multi *= item;
  }
  sub.push(multi);
  let gotArrForSum = val["nums2"];
  let sum = 0;
  for (const item of gotArrForSum) {
    sum += item;
  }
  sub.push(sum);
  return sub;
});
console.log(subArrOfMultiOfObject);

// flat arr

let flatArr = arr5.flatMap((val) => {
  let sub = [];
  let gotArrForMulti = val["nums"];
  let multi = 1;
  for (const item of gotArrForMulti) {
    multi *= item;
  }
  sub.push(multi);
  let gotArrForSum = val["nums2"];
  let sum = 0;
  for (const item of gotArrForSum) {
    sum += item;
  }
  sub.push(sum);
  return [sub];
});
console.log(flatArr);
