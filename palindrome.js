const isPalindrome = function(x) {
  const stringNum = x.toString();
  if (stringNum == stringNum.split("").reverse().join("")) {
          return true 
  } else {
     return false
  }
};
