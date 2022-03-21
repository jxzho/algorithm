// 递归，最简版
function fib(n) {
  if (n <= 2) {
    return 1
  } else {
    return fib(n - 1) + fib(n - 2)
  }
}

// 尾递归
function fib_tail_rec(n) {
  function fib(n, acc1, acc2) {
    if (n === 0) {
      return acc1
    } else {
      return fib(n - 1, acc2, acc1 + acc2)
    }
  }

  return fib(n, 0, 1)
}
