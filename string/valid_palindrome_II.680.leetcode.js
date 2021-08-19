// Almost Palindrome

// Given a string s, 
// return true if the s can be palindrome after deleting at most one character from it.

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.

var validPalindrome = function(s) {
  let left = 0; 
  let right = s.length-1;
  while(left < right){
      if(s[left] !== s[right]){
          return validSubPalindrome(left+1, right, s) 
                 || validSubPalindrome(left, right-1, s)
      }
      left++;
      right--
  }
  return true;
};


const validSubPalindrome = function(left, right, s){
  while(left < right){
      if(s[left] !== s[right]){
          return false;
      }
      left++;
      right--
  }
  return true;
}

console.log(validPalindrome("aba"))
console.log(validPalindrome("abca"))
console.log(validPalindrome("abc"))