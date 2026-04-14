class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        var output = [];
        var sortedStrs = strs.sort();
        var mainHashMap = {};
        for (var i = 0 ; i < strs.length ; i++){
           const sortedWord =  strs[i].split("").sort().join("");
           if(mainHashMap[sortedWord]=== undefined){
            mainHashMap[sortedWord] = [strs[i]];
           }else{
            mainHashMap[sortedWord].push(strs[i]);
           }
           
        }
        const values = Object.values(mainHashMap);
        return values;

    }
}
