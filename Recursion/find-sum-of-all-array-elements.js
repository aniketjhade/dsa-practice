const arr = [5, 4, 3, 4, 6];

function arrSum(n) {
  if (n == 0) return arr[n];

  return arr[n] + arrSum(n - 1);
}

let result = arrSum(arr.length - 1);
console.log(result);
