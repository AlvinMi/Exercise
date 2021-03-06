/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let result = 0;
  if (nums.length <= 1) {
    return nums[0] || 0;
  }

  const dp = [nums[0], Math.max(nums[0], nums[1])];
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }

  result = Math.max(dp[nums.length - 1], dp[nums.length - 2]);

  return result;
};
// @lc code=end

console.log(rob([1, 2, 3, 1]));
