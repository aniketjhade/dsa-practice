function removeElement(arr, val) {
  let j = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== val) {
      arr[j] = arr[i];
      j++;
    }
  }
  return j;
}

const arr = [0, 0, 1, 1, 2, 3, 4, 4, 4, 4, 5];
const output = removeElement(arr, 4);
console.log(output);
console.log(arr.slice(0, output));
