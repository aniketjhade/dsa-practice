function revString(str) {
  let i = 0;
  let j = str.length - 1;
  let temp;
  while (i < j) {
    temp = str[i];
    str[i] = str[j];
    str[j] = temp;
    i++;
    j--;
  }
  return str;
}

const arr = ["h", "e", "l", "l", "o"];
const output = revString(arr);
console.log(output);
