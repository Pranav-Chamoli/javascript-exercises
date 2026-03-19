const sumAll = function (arg1, arg2) {
  let result = 0;
  let min = Math.min(arg1, arg2);
  let max = Math.max(arg1, arg2);
  if (
    arg1 < 0 ||
    arg2 < 0 ||
    !Number.isInteger(arg1) ||
    !Number.isInteger(arg2)
  ) {
    return "ERROR";
  } else {
    for (let i = min; i <= max; i++) {
      result += i;
    }
  }

  return result;
};

// Do not edit below this line
module.exports = sumAll;
