const twoSum = (nums, target) => {
  let i, j;
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      const sum = nums[i] + nums[j];
      if (sum === target) return [i, j];
    }
  }
};

const num1 = [2, 7, 11, 15];
const num2 = [3, 3];
const num3 = [3, 2, 3];

console.log(twoSum(num1, 9));
console.log(twoSum(num2, 6));
console.log(twoSum(num3, 6));
