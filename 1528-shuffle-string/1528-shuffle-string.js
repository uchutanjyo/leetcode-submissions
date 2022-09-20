/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
    let restoredString = []
    for (let i = 0; i < s.length; i++) {
        restoredString[indices[i]] = s[i]

    }
    return restoredString.toString().replaceAll(',', '');
};