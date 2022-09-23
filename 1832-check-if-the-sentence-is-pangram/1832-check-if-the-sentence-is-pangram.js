/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
  let letters = 'abcdefghijklmnopqrstuvwxyz'  
  let counter = 26;
  for (let i=0; i<sentence.length; i++) {
    if (sentence.includes(letters[i])) {
        counter--
    }
  }  
  if (counter === 0) {
    return true
} else {

    return false
}
};