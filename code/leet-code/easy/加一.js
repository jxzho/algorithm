// https://leetcode-cn.com/problems/plus-one/

// 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
// 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
// 你可以假设除了整数 0 之外，这个整数不会以零开头。

// 输入：digits = [1,2,3]，输入数组表示数字 123。
// -> [1,2,4]

// 输入：digits = [4,3,2,1]，输入数组表示数字 4321。
// -> [4,3,2,2]

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let addOne = true
  let over = false

  const setVal = (val, first) => {
    const remain = val % 10
    if (val === 10 && remain === 0) {
      addOne = true
      over = first
      return remain
    } else {
      addOne = false
      return remain
    }
  }

  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i] = setVal(digits[i] + !!addOne, i == 0)
  }

  return over ? [1, ...digits] : digits
}
