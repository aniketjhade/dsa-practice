/**
 * Remove duplicates from sorted array
 * Two Pointer Approach
 */

function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return i + 1;
}

const nums = [1, 1, 2, 2, 2, 2, 3, 4, 4];

const k = removeDuplicates(nums);

console.log("Number of unique elements:", k);

console.log("Updated array:", nums.slice(0, k));
