// 二分查找法
// 1 3 5 7 9 => 1 3 | 7 9 =>

// 有序无重复数组
Array.prototype.binarySearch = function (target) {
  let lowBoundary = 0,
    highBoundary = this.length - 1,
    centerIndex = undefined,
    item = undefined

  while (lowBoundary <= highBoundary) {
    centerIndex = Math.floor((lowBoundary + highBoundary) / 2)
    item = this[centerIndex]
    if (item === target) {
      return centerIndex
    }
    lowBoundary = target < item ? lowBoundary : centerIndex + 1
    highBoundary = target < item ? centerIndex - 1 : highBoundary
  }
  return -1
}

// 有序重复数组
Array.prototype.binaryRepeatSearch = function (target) {
  let lowBoundary = 0,
    highBoundary = this.length - 1,
    centerIndex = undefined,
    result = -1

  while (lowBoundary <= highBoundary) {
    centerIndex = Math.floor((lowBoundary + highBoundary) / 2)
    centerValue = this[centerIndex]
    if (centerValue === target) {
      result = centerIndex
      highBoundary = centerIndex - 1
      continue
    }
    lowBoundary = target < centerValue ? lowBoundary : centerIndex + 1
    highBoundary = target < centerValue ? centerIndex - 1 : highBoundary
  }
  return result
}

let ary = [1, 3, 3, 4, 10, 20, 22, 22, 55, 80]
ary.forEach((item, index) => {
  console.log(ary.binaryRepeatSearch(item))
})
