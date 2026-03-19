const reverseString = function (string) {
  //   Method 1 using array functions
  // return string.split("").reverse().join("");
  //   Method 2 using loops
  let result = "";
  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }
  return result;
};

// Do not edit below this line
module.exports = reverseString;
