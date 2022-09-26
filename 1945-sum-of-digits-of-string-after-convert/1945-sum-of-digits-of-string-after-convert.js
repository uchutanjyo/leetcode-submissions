/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var getLucky = function(s, k) {
    let transformation = 0
    const letters = 'abcdefghijklmnopqrstuvwxyz'  
    let digits;
    for (let i=0; i<s.length; i++) {
        for (let j=0; j<letters.length; j++)
        if (letters[j] == s[i]) {
            if ((j+1).length === 1) {
            transformation += j+1
            } else {
                digits = (j+1).toString().split("")
                digits.forEach((digit) => {
                    transformation += Number(digit)
                })
            }
        }
      
    }
    if (k===1) {
        return transformation
    }
 else {
        for (let h = k; h>=1; h--) {
            let nextTransformation = 0
        transformation = transformation.toString().split("")
   
        transformation.forEach((digit) => {
            nextTransformation += Number(digit)
      

        } )
        if (h-2 ===0) {
            return nextTransformation
          }  
                    else if (nextTransformation.toString().length === 1) {
           
        return nextTransformation
        }
        else {
            transformation = nextTransformation
        }
        } 

    }
};