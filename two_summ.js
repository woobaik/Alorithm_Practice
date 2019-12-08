var twoSum = function(nums, target) {
  const result = {}
  for (let i = 0; i < nums.length; i++) {
    if (result[target - i]) {
      return [result[i], result[target - i]]
    }
    result[nums[i]] = i
  }
  return false
}
