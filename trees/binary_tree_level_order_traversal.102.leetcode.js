// Given the root of a binary tree, 
// return the level order traversal of its nodes' values. 
// (i.e., from left to right, level by level).


// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]


var levelOrder = function(root) {
  if(!root) return [];
  let queue = [root]
  let result = []
  
  while(queue.length) {
      let queue_length = queue.length;
      let count = 0;
      let level_array = [];
      
      while(count < queue_length){
          let current_root = queue.shift();
          level_array.push(current_root.val);
          if(current_root.left)  queue.push(current_root.left);
          if(current_root.right)  queue.push(current_root.right);
          count++;
      }
      
      result.push(level_array)
  }
  
  return result;
};