const arr = [1, 3, 5, 7, 6, 4, 0];

function findTarget(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
  return -1;
}

const result = findTarget(arr, 40);
console.log(result);
