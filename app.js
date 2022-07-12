{1,2,3,4}

/*ref*/

/*0:{Array(3)=>true}
1: {Array(3)=>false}*/

const hasDuplicate = arr => arr.length!=new Set(arr).size

const vowelCount = function(str){
    str = str.toLowerCase()
    const vowel = 'aeiou'
    const vowelMap = new Map();
    for (let char of str){
        if (vowel.includes(char)){
            if (vowelMap.has(char)){
                vowelMap.set(char, vowelMap.get(char)+1);
            }
            else{
                vowelMap.set(char,1)
            }
        }
    }
    return vowelMap;
}