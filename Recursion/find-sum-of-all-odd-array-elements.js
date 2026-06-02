const arr = [5, 4, 3, 4, 6];

function arrSum(n) {
  let isOdd = arr[n] % 2 != 0;

  if (n == 0) return isOdd ? arr[n] : 0;

  return (isOdd ? arr[n] : 0) + arrSum(n - 1);
}

let result = arrSum(arr.length - 1);
console.log(result);
