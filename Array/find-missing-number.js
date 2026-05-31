function findMissingNumber(arr) {
  const n = arr.length;

  let expectedSum = (n * (n + 1)) / 2;
  let currSum = 0;

  for (let i = 0; i < n; i++) {
    currSum += arr[i];
  }

  return expectedSum - currSum;
}

const arr = [3, 4, 1, 2, 5];
const output = findMissingNumber(arr);
console.log(output);
