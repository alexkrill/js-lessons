const mixedArray = [3,13,74,14,66,15,22,4];
var newArray = [];

function isEven (number) {
  return number % 2 == 0;
}

mixedArray.forEach (num => {
  if (isEven(num)) {
    newArray.push(num);
  }
})

console.log(newArray);