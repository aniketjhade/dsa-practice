const arr = [1, [2, [3, [7, 8], 6, 8], 4], 5];

function flattenArray(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flattenArray(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

const output = flattenArray(arr);

console.log(output);
