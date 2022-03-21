// 3，8，2，4，1，9，6，5, 10
// 自顶向下的归并排序可概述为
// 1 将左半边排序
// 2 将右半边排序
// 3 将排序后的两个数组合并如此递归地将数组排序轨迹：
// Sort 3 8 2 4
// Sort 3,8
// merge 3，8
// Sort 2,4
// merge2，4
// merge 3，8；2，4
// Sort 1,9,6,5

function mergeSort(ary) {
  function merge(ary, ary2) {
    let merge = []
    while (ary.length >= 1 && ary2.length >= 1) {
      ary[0] > ary2[0] ? merge.push(ary2.shift()) : merge.push(ary.shift())
    }
    return merge.concat(ary.concat(ary2))
  }

  if (ary.length === 1) return ary
  let left = mergeSort(ary.slice(0, Math.floor(ary.length / 2))),
    right = mergeSort(ary.slice(Math.floor(ary.length / 2)))
  return merge(left, right)
}

const ary = [3, 4, 10, 1, 5, 2, 12, 4, 3, 12, 13, 100, 200, 32, 124]
document.write(mergeSort(ary))
