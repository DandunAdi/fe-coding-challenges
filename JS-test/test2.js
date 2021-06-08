// Expected result : [7, 3, 1, 2, 5, 6, 9, 10, 4, 8]
// Direction : Mutate arr1 to return combined array with arr2. The conditions are :
// 1. odd number at beginning
// 2. even number at the end of array
// 3. Original arr1 at the middle

const arr1 = [1, 2, 5, 6, 9, 10];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(arr1, arr2) {
  const resultArr = [...arr1];
  for (let i = 0; i < arr2.length; i++) {
    const value = arr2[i];

    // check if value is in result array
    if (!resultArr.includes(value)) {
      // check if value is even
      if (value % 2 === 0) {
        resultArr.push(value);
      } else {
        resultArr.unshift(value);
      }
    }
  }
  return resultArr;
}

console.log(result(arr1, arr2));
