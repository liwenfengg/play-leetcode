// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target 的那 两个 整数，并返回它们的数组下标。
//
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
//
// 你可以按任意顺序返回答案。
//
//
//
// 示例 1：
//
//
// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
//
//
// 示例 2：
//
//
// 输入：nums = [3,2,4], target = 6
// 输出：[1,2]
//
//
// 示例 3：
//
//
// 输入：nums = [3,3], target = 6
// 输出：[0,1]
//
//
//
//
// 提示：
//
//
// 2 <= nums.length <= 10⁴
// -10⁹ <= nums[i] <= 10⁹
// -10⁹ <= target <= 10⁹
// 只会存在一个有效答案
//
//
//
//
// 进阶：你可以想出一个时间复杂度小于 O(n²) 的算法吗？
//
// Related Topics 数组 哈希表 👍 16049 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const prevNums = {} // 存储出现过的数字，和对应的索引

  for (let i = 0; i < nums.length; i++) { // 遍历元素
    const curNum = nums[i] // 当前元素
    const targetNum = target - curNum // 满足要求的目标元素
    const targetNumIndex = prevNums[targetNum] // 在 prevNums 中获取目标元素的索引
    if (targetNumIndex !== undefined) { // 如果存在，直接返回 [目标元素的索引, 当前索引]
      return [targetNumIndex, i]
    }
    else { // 如果不存在，说明之前没出现过目标元素
      prevNums[curNum] = i // 存入当前的元素和对应的元素
    }
  }
}

// console.log(twoSum([2,7,11,15],9))
// leetcode submit region end(Prohibit modification and deletion)
