const arr = [1, 2, 3, 4, 2, 3, 1, 4, 5];

function findSingleElement(arr) {
  let xor = 0;

  for (let i = 0; i < arr.length; i++) {
    xor ^= arr[i];
  }
  return xor;
}

const output = findSingleElement(arr);
console.log(output);
