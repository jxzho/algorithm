// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。

// strs = ["flower", "flow", "flight"]
// -> "fl"

// strs = ["dog", "racecar", "car"]
// -> ""

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let s = ''
  for (
    let i = 0;
    i <
    Math.min.apply(
      null,
      strs.map((s) => s.length)
    );
    i++
  ) {
    if (
      strs.every((s) => {
        return s[i] === strs[0][i]
      })
    ) {
      s += strs[0][i]
    } else {
      break
    }
  }
  return s
}
