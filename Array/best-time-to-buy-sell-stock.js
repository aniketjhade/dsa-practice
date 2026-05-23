function maxProfit(arr) {
  let min = arr[0];
  let maxProfit = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - min > maxProfit) {
      maxProfit = arr[i] - min;
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return maxProfit;
}

const arr = [7, 5, 3, 6, 1, 2, 4];
const output = maxProfit(arr);
console.log(output);
