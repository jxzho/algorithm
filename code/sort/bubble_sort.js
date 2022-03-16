// 冒泡排序
// 比较相邻元素，第一个大于第二个则交换它们位置，对每一对相邻元素做同样工作
// 重复以上步骤，除了上次排序完的最后一个数

// 1 5 3 2 5 7 10
// 1 3 5 2 5 7 10
// 1 3 2 5 5 7 10
// 1 3 2 5 5 7 10

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