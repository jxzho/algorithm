// 快速排序（二分法 递归）
function quickSort (ary) {
  if (ary.length <= 1) return ary; //数组长度为1或者0

  // 中心参考下标 & 值
  let pivotIndex = Math.floor(ary.length / 2),
      pivotValue = ary[pivotIndex],
      leftAry = [], // less than pivotValue
      rightAry = []; // greater than pivotValue 

  for (let i = 0; i < ary.length; i++) {
    const curValue = ary[i];
    if (i === pivotIndex) continue;
    if (ary[i] < pivotValue) {
      leftAry.push(curValue);
    } else {
      rightAry.push(curValue);
    }
  }

  // 返回一个新的数组，原数组不改变
  return quickSort(leftAry).concat(pivotValue, quickSort(rightAry)); 
}

const ary = [12, 1, 3, 12, 4, 6, 2, 70, 50, 40, 40, 69, 1, 3];
const afterSortAry = quickSort(ary);