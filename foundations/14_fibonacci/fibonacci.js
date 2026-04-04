const fibonacci = function (num) {
  num = Number(num);
  if (num < 0) return "OOPS";
  if (num === 0) return 0;
  if (num === 1 || num === 2) return 1;

  let prevNum = 1;
  let currNum = 1;
  for (let i = 3; i <= num; i++) {
    let nextNum = prevNum + currNum;
    prevNum = currNum;
    currNum = nextNum;
  }
  return currNum;
};

// Do not edit below this line
module.exports = fibonacci;
