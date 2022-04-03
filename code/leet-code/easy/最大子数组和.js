// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素）
// 返回其最大和。
// 子数组 是数组中的一个连续部分。

// 输入：nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// -> 6
// 解释：连续子数组 [4, -1, 2, 1] 的和最大，为 6 。

/**
 * @param {number[]} nums
 * @return {number}
 */
const max = Math.max
var maxSubArray = function (nums) {
  let pre = 0
  let max = nums[0]
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i]
    pre = max(item + pre, item)
    max = max(max, pre)
  }
  return max
}
