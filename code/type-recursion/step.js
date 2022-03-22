function stepsWay(n) {
  function way(n, acc1, acc2) {
    let res
    if (n === 2) {
      res = acc2
    } else {
      res = way(n - 1, acc2, acc1 + acc2)
    }

    return res
  }

  if (n === 0 || n === 1) {
    return 1
  } else if (n === 2) {
    return 2
  } else {
    return way(n, 1, 2)
  }
}
