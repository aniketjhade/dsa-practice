const n = 1212;

function isPalindrome(n) {
  if (n < 0) return false;

  let rev = 0;
  let temp = n;

  while (temp > 0) {
    let rem = temp % 10;
    rev = rev * 10 + rem;
    temp = Math.floor(temp / 10);
  }
  return n === rev;
}
console.log(isPalindrome(n));
