function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (right >= left) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] == target) {
      return mid;
    } else if (target > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14];
const target = 5;
const result = binarySearch(nums, target);
console.log(result);
