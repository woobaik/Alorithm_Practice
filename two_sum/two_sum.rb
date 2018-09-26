# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def two_sum(nums, target)
  idxes = {}
  nums.each_with_index do |num, idx|
    if idxes[target - num]
      return [idxes[target - num], idx]
    end
    idxes[num] = idx
  end
end

two_sum([2,7,11,15], 26)
