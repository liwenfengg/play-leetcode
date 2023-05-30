//给你一个含 n 个整数的数组 nums ，其中 nums[i] 在区间 [1, n] 内。请你找出所有在 [1, n] 范围内但没有出现在 nums 中的数
//字，并以数组的形式返回结果。
//
//
//
// 示例 1：
//
//
//输入：nums = [4,3,2,7,8,2,3,1]
//输出：[5,6]
//
//
// 示例 2：
//
//
//输入：nums = [1,1]
//输出：[2]
//
//
//
//
// 提示：
//
//
// n == nums.length
// 1 <= n <= 10⁵
// 1 <= nums[i] <= n
//
//
// 进阶：你能在不使用额外空间且时间复杂度为 O(n) 的情况下解决这个问题吗? 你可以假定返回的数组不算在额外空间内。
//
// Related Topics 数组 哈希表 👍 1228 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
// 原地修改法
// const findDisappearedNumbers = function (nums) {
//   const n = nums.length
//   for (const num of nums) {
//     const index = (num - 1) % n  // num -1 必定小于 n，所以取余数就是本身，但后面加了 n，所以取余数就仍是本身
//     nums[index] = nums[index] + n
//   }
//   const ret = []
//   for (const [i, num] of nums.entries()) {
//     if (num <= n)
//       ret.push(i + 1)
//   }
//   return ret
// }
// 分析
// 4 如果 4 存在，那么 4 - 1 = 3 位置的数就加上数组长度，最后肯定大于数组长度 4 + 8 = 12
// 反之，5 不存在，那么 5 - 1 = 4 位置的数就不变，最后肯定小于等于数组长度
// 最后小于等于 8 的位置就是缺失的数的

// 负数标记法
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = function (nums) {
  for (const num in nums) {
    const index = Math.abs(nums[num]) - 1
    nums[index] = nums[index] < 0 ? nums[index] : -nums[index]
  }

  // console.log('w-nums', nums)

  const n = nums.length

  const res = []

  for (let i = 0; i < n; i++) {
    if (nums[i] > 0)
      res.push(i + 1)
  }

  // console.log('res', res)

  return res
}

// const nums = [4, 3, 2, 7, 8, 2, 3, 1]
// 分析
// 4 如果 4 存在，那么 4 - 1 = 3 位置的数就会变成负数
// 最后没有变为负数的位置就是缺失的数的
// 因为是索引，所以要 + 1
// findDisappearedNumbers(nums) // [5, 6]



//leetcode submit region end(Prohibit modification and deletion)
