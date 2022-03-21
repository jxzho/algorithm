// 数组拍平, flatten
// 1. 递归
// 2. 非递归，利用栈
// 3. ES6 生成器

const ary = [1, [[2], 3, 4], 5]

// ES6生成器 暴力法
const flat = (function () {
  function* createGenerator(ary) {
    if (ary.length === 0) return undefined
    let newAry = ary.join(',').split(',') // hack
    for (var i = 0; i < newAry.length; i++) {
      yield Number(newAry[i])
    }
  }

  return function (arr) {
    const resArr = []
    let g = createGenerator(arr) // 生成器
    let result = g.next()

    while (!result.done) {
      // console.log(result.value);
      resArr.push(result.value)
      result = g.next()
    }
    return resArr
  }
})()

// function* flatten2(arr) {
//   for (let item of arr) {
//     Array.isArray(item) ? yield* flatten2(item) : yield item;
//   }
// }

// 递归
function flat3(arr) {
  const resArr = arr.reduce((pre, cur) => {
    if (Array.isArray(cur)) {
      pre = pre.concat(
        // 铺平一层
        flat3(cur) // 递归铺平
      )
    } else {
      pre.push(cur)
    }
    return pre
  }, [])
  return resArr
}

// 栈，非递归
function flat4(arr) {
  const resArr = []

  const stack = arr.slice()
  while (stack.length > 0) {
    const item = stack.pop() // 出栈
    if (Array.isArray(item)) {
      stack.push(...item)
    } else {
      resArr.unshift(item)
    }
  }

  return resArr
}
