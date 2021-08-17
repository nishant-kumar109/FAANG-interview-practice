var lengthOfLongestSubstring = function(s) {
    
  if(s.length <= 1) return s.length;
  
  let longest = 0, seen = new Map(), currentLongest = 0;
  let left = 0;
  for(let right = 0; right < s.length; right++){
      let currentChar = s[right]
      let previouslySeenChar = seen.get(currentChar) 
      if(previouslySeenChar >= left){
          left = previouslySeenChar+1
      }
      
      seen.set(currentChar, right);
      longest = Math.max(longest, right - left + 1)
  }
 return longest
};

console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("pwwkew"))
console.log(lengthOfLongestSubstring(""))