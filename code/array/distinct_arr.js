// 1、双重for循环法
// for (let i = 0; i < ary.length; i++) {
//   let item = ary[i];
//   for (let j = i + 1; j < ary.length; j++) {
//     if (ary[j] === item) {
//       ary.splice(j, 1);
//       j--;
//     }
//   }
// }

// 2、取每一项与这项后面数比较，类似第一种
// for (let i = 0; i < ary.length; i++) {
//   let item = ary[i];
//   let newAry = ary.slice(i + 1);
//   if (newAry.indexOf(item) > -1) {
//     ary.splice(i, 1);
//     i--;
//   }
// }
// console.log(ary);

// 3、对象键值去重
// let obj = {};
// for (let i = 0; i < ary.length; i++) {
//   if (!obj[ary[i]]) {
//     obj[ary[i]] = ary[i];
//     continue;
//   }
//   ary[i] = ary[ary.length - 1];
//   ary.length--;
//   i--;
// }
// console.log(ary);

// 4、相邻比较法（先排序再比较相邻两项）
// let ary = [1, 2, 3, 4, 5, 5, 2, 1, 10, 9, 1, 1,];
// ary.sort((a, b) => a-b);
// for (let i = 0; i< ary.length; i++) {
//   if (ary[i] === ary[i + 1]) {
//     ary.splice(i, 1);
//     i--;
//   }
// }
// console.log(ary);
