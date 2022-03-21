// 选择排序
// 每次选择最小的值放在开头，下一次选择从未选择值中选取
function selectSort() {
  for (let i = 0; i < ary.length - 1; i++) {
    let min = ary[i]
    for (let j = i + 1; j < ary.length; j++) {
      if (ary[j] < min) {
        min = ary[j]
        ary[i] = ary[i] + ary[j]
        ary[j] = ary[i] - ary[j]
        ary[i] = ary[i] - ary[j]
      }
    }
  }
}

const ary = [12, 1, 3, 12, 4, 6, 2, 70, 50, 40, 40, 69, 1, 3]
selectSort(ary)
