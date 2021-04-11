/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const smallStr = s1.length <= s2.length ? s1 : s2;
  const arr = Array.from(smallStr === s1 ? s2 : s1);
  let result = 0;

  for (let i = 0; i < smallStr.length; i++) {
    const index = arr.indexOf(smallStr[i]);

    if (index !== -1) {
      result++;
      delete arr[index];
    }
  }

  return result;
}

module.exports = getCommonCharacterCount;
