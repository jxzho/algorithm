// 插入排序
// 原理：
// 每次从无序表中取出最后一个元素，把它插入到有序表的合适位置，使有序表仍然有序。
function insertSort(ary) {
  for (let i = 1; i < ary.length; i++) {
    let item = ary[i]
    for (let j = 0; j < i; j++) {
      if (item < ary[j]) {
        ary.splice(i, 1)
        ary.splice(j, 0, item)
        break // 这个break很关键
      }
    }
  }
}

const ary = [10, 2, 8, 12, 1, 4, 4, 19, 15, 8, 2, 6]
insertSort(ary)
