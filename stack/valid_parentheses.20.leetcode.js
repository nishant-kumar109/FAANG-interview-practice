// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
// determine if the input string is valid.

// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.


// Input: s = "()[]{}"
// Output: true

const isValid = (s)=>{
  let parens = {'(' : ')', '{' : '}', '[' : ']'}
    
  let stack = [];
  for(let i=0; i<s.length; i++){
      if(parens[s[i]]){
          stack.push(s[i])
      }else{
          let left_bracket = stack.pop()
          let correct_bracket = parens[left_bracket]  // right_bracket
          if(s[i] !== correct_bracket) return false
      }
  }
  return stack.length === 0;   // 
}

console.log(isValid("()[]{}"))