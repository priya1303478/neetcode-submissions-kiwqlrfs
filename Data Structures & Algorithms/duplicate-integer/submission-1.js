class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        var numbers ={};
        var isNumberPresent = false;
        for( var i = 0;i< nums.length ;i++){
            if(numbers[nums[i]] == undefined){
                //console.log(nums[i]);
                numbers[nums[i]] = true;
                isNumberPresent = false;
            }else{
                console.log(nums[i]);
                return numbers[nums[i]];
            }
        }
        return isNumberPresent;
    }
}
