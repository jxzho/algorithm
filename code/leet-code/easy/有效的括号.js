// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。

// 输入：s = "()"
// -> true

const map = {
  ']': '[',
  '}': '{',
  ')': '(',
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // 排除奇数
  if (s.length % 2 !== 0) {
    return false
  }

  const stack = []
  for (str of s) {
    if (!(str in map)) {
      stack.push(str)
    } else {
      if (map[str] === stack.pop()) {
        continue
      } else {
        return false
      }
    }
  }
  return stack.length === 0
}
