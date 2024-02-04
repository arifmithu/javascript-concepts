let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//write a code to filter above array to get even numbers as an array?
let result = arr.filter((value) =>{
    if(value % 2 === 0) return true;
    else return false;
})
console.log(result);

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
  "with", "happiness"
];
//write a code to get those strings with odd length as an array?
let result1 = arr2.filter((value) =>{
    if(value.length % 2 !== 0) return true;
    else return false;
})
console.log(result1);


let arr3 = [
  [1, 2, 3],
  [4, 6],
  [3, 4],
  [5, 6, 7],
  [8, 9, 10],
];
//write a code which includes the sum of sub array if the sum is even;
let result2 = arr3.filter((value)=>{
    let sum = 0;
    for(const val of value){
        sum += val;
    }
    if(sum % 2 == 0) return true;
    else return false;
})
console.log(result2);


let arr4 = [
  { a: 2, b: 11 },
  { a: 4, b: 3 },
  { a: 6, b: 1 },
  { a: 8, b: 2 },
  { a: 10, b: 0 },
  { a: 2, b: 13 },
  { a: 7, b: 15 },
];
//write a code to include those objects thus the multiplication of values >= 15;
let result3 = arr4.filter((value)=>{
    let result = value.a * value.b;
    return result >= 15;
})
console.log(result3);


let arr5 = [
  { nums: [5, 4], nums2: [1, 2] },
  { nums: [2, 3], nums2: [4, 5] },
  { nums: [6, 7], nums2: [8, 9] },
];
//write a code to include those objects if the sum of first key is greater than the sum of second key

let result4 = arr5.filter((value)=>{
    let sum1 = 0;
    for(const val of value.nums) sum1 += val;
    let sum2 = 0;
    for(const val of value.nums2) sum2 += val;
    return sum1 > sum2;
})
console.log(result4);
