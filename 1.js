function moveZeroes(nums) {
  let i = 0;
  let count = 0;

  // Iterate through the array
  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // If the current element is non-zero, move it to the front of the array
      nums[count] = nums[i];
      count++;
    }
  }

  // Fill the remaining elements with zeros
  while (count < nums.length) {
    nums[count] = 0;
    count++;
  }

  return nums;
}

// Example usage
const nums = [0, 1, 0, 3, 12];
const result = moveZeroes(nums);
console.log(result);
