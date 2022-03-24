// https://leetcode-cn.com/problems/two-sum/

// nums = [2, 7, 11, 15], target = 9
// -> [0, 1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let hash = {}
  for (let i = 0; i < nums.length; i++) {
    if (hash[target - nums[i]] !== undefined) {
      return [i, hash[target - nums[i]]]
    }
    hash[nums[i]] = i
  }
  return []
}
