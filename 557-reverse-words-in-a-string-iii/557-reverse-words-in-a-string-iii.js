/**
 * @param {string} s
 * @return {string}
 */

var reverseWords = function (s) {
    let reversedWords = ""
    let counter = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == " " || !s[i + 1]) {
            for (let j = i; j >= counter; j--) {

                reversedWords += s[j]
            }
                counter = i
                reversedWords += " "

        }
    }
    let finalString=  reversedWords.trim()
    finalString = finalString.replace(/ +(?= )/g,'');
    return finalString
};