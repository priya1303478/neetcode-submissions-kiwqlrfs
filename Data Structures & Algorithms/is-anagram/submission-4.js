class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        var result = false;
        var sHashMap = {}, tHashMap = {};
        if(s.length === t.length){
for (var i = 0 ; i < s.length ; i++){
    sHashMap[s[i]] = sHashMap[s[i]] ? 1+sHashMap[s[i]] : 1;
    tHashMap[t[i]] = tHashMap[t[i]] ? 1+tHashMap[t[i]] : 1;
}
for (const key in sHashMap) {
if(sHashMap[key] === tHashMap[key]){
    result = true;
}else{
    result = false;
    break;
}
}
        }
            return result;
        
    }
}
