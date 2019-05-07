function sumTotal(num) {
  if (num === 1) {
    return num;
  }
  return num + sumTotal(num - 1);
}

console.log(sumTotal(4));
console.log(sumTotal(10));

module.exports = sumTotal;
