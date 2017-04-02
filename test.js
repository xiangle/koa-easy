"use strict";

// (function () {
//   console.log(this);
//   let a = 18448;
//   let _this = this;
//   (function () {
//     console.log(this === _this);
//   })()
// })()

// function foo() {
//   setTimeout(() => {
//     console.log('id:', this.id);
//   }, 100);
// }

// var id = 21;

// foo.call({ id: 42 });
// id: 42

let array = [99,32,77,12,4,8]

let v = []
for (let item of array) {
  v[item]= item
}

v = Object.keys(v)

// let v2 = ''
// for (let item in v) {
//   v2 += item + ','
// }

console.log(v)

