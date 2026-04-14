class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const indexByValue = new Map();

var result = [];
        for (var i = 0; i< nums.length ; i++){
            const complement = target - nums[i];
             if (indexByValue.has(complement)) {
                 const j = indexByValue.get(complement);
      return i < j ? [i, j] : [j, i];
             }
              indexByValue.set(nums[i], i);
        }
        return result;
    }
}
