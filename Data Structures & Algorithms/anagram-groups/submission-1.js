class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
         var mainHashMap = {};
        //COmmented solution has more time and space complexity
        // const count = new Array(26).fill(0);
        // var output = [];
        // var sortedStrs = strs.sort();
        // var mainHashMap = {};
        // for (var i = 0 ; i < strs.length ; i++){
        //    const sortedWord =  strs[i].split("").sort().join("");
        //    if(mainHashMap[sortedWord]=== undefined){
        //     mainHashMap[sortedWord] = [strs[i]];
        //    }else{
        //     mainHashMap[sortedWord].push(strs[i]);
        //    }
           
        // }
        // const values = Object.values(mainHashMap);
        // return values;
for (var i = 0 ; i < strs.length ; i++){
    var s = strs[i];
        const count = new Array(26).fill(0);
         for (let j = 0; j < s.length; j++) {
        count[s.charCodeAt(j) - 97]++;
        
}
const key = count.join('#');
mainHashMap[key] == undefined ? mainHashMap[key] = [strs[i]] : mainHashMap[key].push(strs[i]);
}
return Object.values(mainHashMap);
    }
}
