// Merge Strings Alternately

// You are given two strings word1 and word2.
// Merge the strings by adding letters in alternating order, starting with word1. 
// If a string is longer than the other, append the additional letters onto the end of the merged string.
// Return the merged string.



const  mergeAlternately = (word1, word2)=>{
    let result = '', i = 0, j = 0;

    while (i < word1.length || j < word2.length) {
        if (i < word1.length) {
            result += word1[i];
            i++
        }

        if (j < word2.length) {
            result += word2[j];
            j++
        }
    }

    return result;
}

console.log(mergeAlternately("abc", "pqr"));
console.log(mergeAlternately("ab", "pqrs"));
console.log(mergeAlternately("abcd", "pq"));