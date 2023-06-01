// 给你一个日志数组 logs。每条日志都是以空格分隔的字串，其第一个字为字母与数字混合的 标识符 。
//
// 有两种不同类型的日志：
//
//
// 字母日志：除标识符之外，所有字均由小写字母组成
// 数字日志：除标识符之外，所有字均由数字组成
//
//
// 请按下述规则将日志重新排序：
//
//
// 所有 字母日志 都排在 数字日志 之前。
// 字母日志 在内容不同时，忽略标识符后，按内容字母顺序排序；在内容相同时，按标识符排序。
// 数字日志 应该保留原来的相对顺序。
//
//
// 返回日志的最终顺序。
//
//
//
// 示例 1：
//
//
// 输入：logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3
// art zero"]
// 输出：["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6
// "]
// 解释：
// 字母日志的内容都不同，所以顺序为 "art can", "art zero", "own kit dig" 。
// 数字日志保留原来的相对顺序 "dig1 8 1 5 1", "dig2 3 6" 。
//
//
// 示例 2：
//
//
// 输入：logs = ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]
//
// 输出：["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]
//
//
//
//
// 提示：
//
//
// 1 <= logs.length <= 100
// 3 <= logs[i].length <= 100
// logs[i] 中，字与字之间都用 单个 空格分隔
// 题目数据保证 logs[i] 都有一个标识符，并且在标识符之后至少存在一个字
//
//
// Related Topics 数组 字符串 排序 👍 211 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string[]} logs
 * @return {string[]}
 */
const reorderLogFiles = function (logs) {
  const length = logs.length
  // 构造二维数组，[log,logIndex]
  const arr = Array.from({ length }, (v, k) => [logs[k], k])

  arr.sort((a, b) => logCompare(a, b))

  return arr.map(item => item[0])
}

function logCompare(log1, log2) {
  const [val1, index1] = log1
  const [val2, index2] = log2

  // [日志标识符，日志内容]
  const split1 = split(val1)
  const split2 = split(val2)

  // 根据日志内容的第一个字符来判断是不是数字日志
  const isDigit1 = isDigit(split1[1][0])
  const isDigit2 = isDigit(split2[1][0])

  // 如果比较的两个都是数字
  if (isDigit1 && isDigit2)
    return index1 - index2

  // 如果比较的两个都不是数字，按内容字母顺序排序
  if (!isDigit1 && !isDigit2) {
    const sc = compareTo(split1[1], split2[1])

    if (sc !== 0)
      return sc

    // 如果内容字母相同，按前面标识再去比较
    return compareTo(split1[0], split2[0])
  }

  // 数字排在字母后面
  return isDigit1 ? 1 : -1
}

function split(str) {
  const index = str.indexOf(' ')
  return [str.slice(0, index), str.slice(index + 1)]
}

// 判断是不是数字
function isDigit(ch) {
  return !isNaN(ch)
}

function compareTo(left, right) {
  const minLen = Math.min(left.length, right.length)

  for (let i = 0; i < minLen; i++) {
    if (left[i].charCodeAt() < right[i].charCodeAt())
      return -1

    if (left[i].charCodeAt() > right[i].charCodeAt())
      return 1
  }

  if (left.length === right.length)
    return 0

  if (left.length > right.length)
    return 1

  return -1
}

// leetcode submit region end(Prohibit modification and deletion)
