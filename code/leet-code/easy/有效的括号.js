// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。

// 输入：s = "([])"
// -> true

// 输入：s = "()[]{}"
// -> true

// 输入：s = "([)]"
// -> false

const map = new Map([
  [']', '['],
  ['}', '{'],
  [')', '('],
])

const isLeftBracket = (val) => {
  return !map.has(val)
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // 奇数个数直接不符
  if (s.length % 2 !== 0) {
    return false
  }

  // 利用栈的FILO
  // 先将属于括号左边的字符依次入栈，一旦遇到属于右括号的字符就开始出栈并和该字符进行比对
  const stack = []
  for (str of s) {
    if (isLeftBracket(str)) {
      stack.push(str)
      continue
    }

    if (map.get(str) !== stack.pop()) {
      return false
    }
  }

  return stack.length === 0
}
