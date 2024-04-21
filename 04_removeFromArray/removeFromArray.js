const removeFromArray = function (array, ...num) {
  return array.filter((arrayElement) => {
    for (let i = 0; i < num.length; i++) {
      num[i] == arrayElement;
    }
  });
};
// Do not edit below this line
module.exports = removeFromArray;
