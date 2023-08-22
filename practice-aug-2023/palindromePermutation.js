
// Check if any permutation of the input is a palindrome
function hasPalindromePermutation(theString) {
  const palindromeMap = {};
  let residualCount = 0;
  for (let i = 0; i < theString.length; i++) {
    if (palindromeMap[theString[i]]) {
      palindromeMap[theString[i]] = palindromeMap[theString[i]] - 1;
      residualCount--;
    } else {
      palindromeMap[theString[i]] = 1;
      residualCount++;
    }
  }
  return residualCount === 0 || residualCount === 1;
}
  
  function hasPalindromePermutation(theString) {
    const palindromeSet = new Set();
    for (let i = 0; i < theString.length; i++) {
      if (palindromeSet.has(theString[i])) {
        palindromeSet.delete(theString[i]);
      } else {
        palindromeSet.add(theString[i]);
      }
    }
    return palindromeSet.size === 0 || palindromeSet.size === 1;
  }
  // Tests
  
  let desc = 'permutation with odd number of chars';
  assertEqual(hasPalindromePermutation('aabcbcd'), true, desc);
  
  desc = 'permutation with even number of chars';
  assertEqual(hasPalindromePermutation('aabccbdd'), true, desc);
  
  desc = 'no permutation with odd number of chars';
  assertEqual(hasPalindromePermutation('aabcd'), false, desc);
  
  desc = 'no permutation with even number of chars';
  assertEqual(hasPalindromePermutation('aabbcd'), false, desc);
  
  desc = 'empty string';
  assertEqual(hasPalindromePermutation(''), true, desc);
  
  desc = 'one character string ';
  assertEqual(hasPalindromePermutation('a'), true, desc);
  
  function assertEqual(a, b, desc) {
    if (a === b) {
      console.log(`${desc} ... PASS`);
    } else {
      console.log(`${desc} ... FAIL: ${a} != ${b}`);
    }
  }
  