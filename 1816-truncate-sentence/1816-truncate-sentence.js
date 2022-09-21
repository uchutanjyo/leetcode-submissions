/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
    let counter = 0;
    let truncatedSentence
    for (let i = 0; i < s.length; i++) {
        if (s[i] == " ") {
            counter++
        }
        if (counter == k) {
            truncatedSentence = s.slice(0, i)
            return truncatedSentence
        }
         else if (counter == k - 1 && !s.slice(i).includes(" ")) {
            return s
        }
    }
};