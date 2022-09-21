/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    let answer = 0
    let counter = 0;
    for (let i = 0; i < s.length + 1; i++) {
        if (s[i] == "L") {
            counter++
        } else {

            counter--
        }
        if (counter === 0) {
            answer++
        }
    }
    return answer
};
