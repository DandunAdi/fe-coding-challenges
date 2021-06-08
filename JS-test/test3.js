// Expected Result : [false, true]
// Direction :
// The first value : If all of arr2 has bigger value than the biggest value of arr1;
// The second value : If some of arr2 has smaller value than the smallest value of arr1;
const arr1 = [4, 6, 2, 3, 5];
const arr2 = [1, 3, 4, 7, 9, 10];

function result(arr1, arr2) {
  const biggestArr1 = Math.max(...arr1);
  let firstRes = true;
  arr2.forEach((num) => {
    if (num < biggestArr1) firstRes = false;
  });

  const smallestArr1 = Math.min(...arr1);
  let secondRes = false;
  arr2.forEach((num) => {
    if (num < smallestArr1) secondRes = true;
  });
  return [firstRes, secondRes];
}

console.log(result(arr1, arr2));
