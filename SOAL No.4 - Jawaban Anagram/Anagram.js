let strs = ["kita", "atik", "tika", "aku", "kia", "makan", "kua"];

const groupAnagrams = function(strs) {
    let anagrams = {};

    for (let i = 0; i < strs.length; i++) {
        let singleString = strs[i];
        let sortedString = [...singleString].sort().join('');
        if(!anagrams[sortedString]) anagrams[sortedString] = [];
        anagrams[sortedString].push(singleString);
    };

    return Object.values(anagrams)
};

console.log(groupAnagrams(strs));
