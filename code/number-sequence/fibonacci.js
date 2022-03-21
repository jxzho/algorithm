// 引入缓存，优化算法时长
const fibonacci = (function () {
  const cached = [null, 1, 1]
  return (n) => {
    if (cached[n]) {
      return cached[n]
    } else {
      const result = fibonacci(n - 1) + fibonacci(n - 2)
      cached.push(result)
      return result
    }
  }
})()

console.log(fibonacci(7))
