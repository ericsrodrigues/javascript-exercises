const reverseString = function (string) {
  return string.split("").reverse().toString().replaceAll(",","");
};

// Do not edit below this line
module.exports = reverseString;
