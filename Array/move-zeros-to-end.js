/**
 * Move Zeroes - Optimal Two Pointer Approach
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function moveZeroes(nums) {
  let j = 0;

  // Move non-zero elements to front
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i];

      j++;
    }
  }

  // Fill remaining positions with zeroes
  for (let i = j; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
}

const nums = [0, 1, 0, 3, 12];
console.log("Input Array:", nums);

const output = moveZeroes(nums);

console.log("Final Array:", output);
