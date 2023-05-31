// 集合 s 包含从 1 到 n 的整数。不幸的是，因为数据错误，导致集合里面某一个数字复制了成了集合里面的另外一个数字的值，导致集合 丢失了一个数字 并且 有
// 一个数字重复 。
//
// 给定一个数组 nums 代表了集合 S 发生错误后的结果。
//
// 请你找出重复出现的整数，再找到丢失的整数，将它们以数组的形式返回。
//
//
//
// 示例 1：
//
//
// 输入：nums = [1,2,2,4]
// 输出：[2,3]
//
//
// 示例 2：
//
//
// 输入：nums = [1,1]
// 输出：[1,2]
//
//
//
//
// 提示：
//
//
// 2 <= nums.length <= 10⁴
// 1 <= nums[i] <= 10⁴
//
//
// Related Topics 位运算 数组 哈希表 排序 👍 331 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findErrorNums = function (nums) {
  // 错误的集合 [重复的数字, 丢失的数字]
  const errorNums = new Array(2).fill(0)

  // 排序
  nums.sort((a, b) => a - b)

  const l = nums.length

  // 上一个数字
  let prev = 0

  for (let i = 0; i < l; i++) {
    // 当前数字
    const curr = nums[i]

    // 如果当前数字和上一个数字相等，说明当前数字是重复的数字
    if (curr === prev)
      errorNums[0] = curr
    // 如果当前数字和上一个数字差值大于 1，
    // 说明缺少的数字为上一个数字和当前数字之间的数字，即上一个数字 + 1
    else if (curr - prev > 1)
      errorNums[1] = prev + 1

    // 更新上一个数字为当前数字
    prev = curr
  }

  // 边界情况，如果排序后的最后一个数字不等于数组长度，说明缺少的数字为数组长度
  if (nums[l - 1] !== l)
    errorNums[1] = l

  return errorNums
}
// leetcode submit region end(Prohibit modification and deletion)
