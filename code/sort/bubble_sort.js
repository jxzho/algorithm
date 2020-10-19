// 冒泡排序
function bubbleSort(ary) {
  for (let i = 0; i < ary.length - 1; i++) {
    for (let j = 0; j < ary.length - i; j++) {
      if (ary[j] > ary[j + 1]) {
        ary[j] = ary[j] + ary[j + 1];
        ary[j + 1] = ary[j] - ary[j + 1];
        ary[j] = ary[j] - ary[j + 1];
      }
    }
  }
}

const ary = [1, 3, 4, 2, 1, 5, 10, 6, 100, 88, 20, 17];
bubbleSort(ary);