// https://leetcode-cn.com/problems/roman-to-integer/

// 例如， 罗马数字 2 写做 II ，即为两个并列的 1 。
// 12 写做 XII ，即为 X + II 。
// 27 写做  XXVII, 即为 XX + V + II 。
// 通常情况下，罗马数字中小的数字在大的数字的右边。

// 但也存在特例，例如 4 不写做 IIII，而是 IV。
// 数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。
// 同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：

// I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
// X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。
// C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
// 给定一个罗马数字，将其转换成整数。

// s = "III" -> 3

const char2NumMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

// {
//   const arr = []
//   let x = 10
//   while (s !== 0) {
//     arr.unshift((s % x))
//     s = s - arr[0]
//     x *= 10
//   }
// }

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let n = 0
  let i = 0
  while (i < s.length) {
    if (i === s.length - 1) {
      n += char2NumMap[s[i++]]
    } else {
      n += char2NumMap[s[i]] >= char2NumMap[s[++i]] ? char2NumMap[s[i - 1]] : -1 * char2NumMap[s[i - 1]]
    }
  }
  return n
}
