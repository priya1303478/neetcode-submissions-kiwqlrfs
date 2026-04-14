class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
     topKFrequent(nums, k) {
    // Step 1: Count frequencies
    const occurrences = {};
    for (const num of nums) {
        occurrences[num] = (occurrences[num] || 0) + 1;
    }

    // Step 2: Create buckets (index = frequency)
    const buckets = Array(nums.length + 1).fill(0).map(() => []);

    for (const [num, freq] of Object.entries(occurrences)) {
        buckets[freq].push(Number(num));
    }

    // Step 3: Collect top k frequent elements
    const result = [];
    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        for (const num of buckets[i]) {
            result.push(num);
            if (result.length === k) break;
        }
    }

    return result;
}

}