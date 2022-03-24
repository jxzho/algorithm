// https://leetcode-cn.com/problems/reverse-integer/

// x = 123  -> 321
// x = -123 -> -321
// x = 120  -> 21
// x = 0    -> 0

// 条件
const getVal = (x) => {
  if (x <= Math.pow(2, 31) - 1 && x >= Math.pow(-2, 31)) {
    return x
  } else {
    return 0
  }
}

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (x === 0) {
    return 0
  }

  let flag = x < 0 ? -1 : 1
  return getVal(
    Number(
      String(x * flag)
        .split('')
        .reverse()
        .join('')
    ) * flag
  )
}
