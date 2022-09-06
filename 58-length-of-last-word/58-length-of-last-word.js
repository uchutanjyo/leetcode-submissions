/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let spacesArr = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ' && s[i + 1] && s[i + 1] !== ' ') {
            spacesArr.push(i)
        }
    }
    let lastSpace = spacesArr[spacesArr.length - 1]
    let lastWord = s.slice(lastSpace + 1).trim()
    return lastWord.length
};