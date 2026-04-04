const palindromes = function (input) {
  let baseString = input.toLowerCase().replace(/[^a-z0-9]/g, "");
  let reverseString = baseString.split("").reverse().join("");
  return baseString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
