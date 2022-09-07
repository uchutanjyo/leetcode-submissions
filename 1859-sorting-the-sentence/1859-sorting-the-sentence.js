/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
    let originalSentenceArray = []
    let newSentences = s
    let currentIndex = 0
    for (let i = 0; i < s.length; i++) {
        if (!newSentences.slice(currentIndex).includes(" ")) {
            let lastChar = newSentences.charAt(newSentences.length - 1)
            originalSentenceArray[lastChar - 1] = newSentences.slice(currentIndex, newSentences.length - 1)
        }
        let ind = newSentences[i - 1]
        if (newSentences[i] == ' ') {
            originalSentenceArray[(ind - 1)] = newSentences.slice(currentIndex, i - 1)
            currentIndex = i + 1
        }
    }
    return originalSentenceArray.join(' ')
};