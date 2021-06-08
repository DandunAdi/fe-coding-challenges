// Expected Result : 6
// Direction : Get the total of "1" in binary value of number input
const number = 221;

function result(num) {
  let result = 0;
  const binaryArr = num.toString(2).split("");
  binaryArr.forEach((num) => {
    if (num === "1") result++;
  });

  return result;
}

console.log(result(number));
