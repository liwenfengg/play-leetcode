// 某种外星语也使用英文小写字母，但可能顺序 order 不同。字母表的顺序（order）是一些小写字母的排列。
//
// 给定一组用外星语书写的单词 words，以及其字母表的顺序 order，只有当给定的单词在这种外星语中按字典序排列时，返回 true；否则，返回
// false。
//
//
//
// 示例 1：
//
//
// 输入：words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
// 输出：true
// 解释：在该语言的字母表中，'h' 位于 'l' 之前，所以单词序列是按字典序排列的。
//
// 示例 2：
//
//
// 输入：words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
// 输出：false
// 解释：在该语言的字母表中，'d' 位于 'l' 之后，那么 words[0] > words[1]，因此单词序列不是按字典序排列的。
//
// 示例 3：
//
//
// 输入：words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
// 输出：false
// 解释：当前三个字符 "app" 匹配时，第二个字符串相对短一些，然后根据词典编纂规则 "apple" > "app"，因为 'l' > '∅'，其中 '∅
// ' 是空白字符，定义为比任何其他字符都小（更多信息）。
//
//
//
//
// 提示：
//
//
// 1 <= words.length <= 100
// 1 <= words[i].length <= 20
// order.length == 26
// 在 words[i] 和 order 中的所有字符都是英文小写字母。
//
//
// Related Topics 数组 哈希表 字符串 👍 245 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
const isAlienSorted = function (words, order) {
  const index = new Array(26).fill(0)

  for (let i = 0; i < order.length; i++)
    index[order[i].charCodeAt() - 'a'.charCodeAt()] = i

  // 将给定的 order 转化为字典序索引 index
  // "hlabcdefgijkmnopqrstuvwxyz"
  // [2,3,4,5,6,7,8,0,9,10,11,1,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
  // 'h'.charCodeAt() 104
  // 'a'.charCodeAt() 97
  // 104 - 97 = 7
  // h => 0 最小 h 转化为了 index 中位置为 7 值为 0

  for (let i = 1; i < words.length; i++) {
    let valid = false

    for (let j = 0; j < words[i - 1].length && j < words[i].length; j++) {
      const prev = index[words[i - 1][j].charCodeAt() - 'a'.charCodeAt()]
      const curr = index[words[i][j].charCodeAt() - 'a'.charCodeAt()]

      if (prev < curr) {
        valid = true
        break
      }
      else if (prev > curr) {
        return false
      }
    }

    if (!valid) {
      if (words[i - 1].length > words[i].length)
        return false
    }
  }

  return true
}

const words = ['hello', 'leetcode']
const order = 'hlabcdefgijkmnopqrstuvwxyz'

isAlienSorted(words, order)

// leetcode submit region end(Prohibit modification and deletion)
