
// Given the root of a binary tree, imagine yourself standing on the right side of it, 
// return the values of the nodes you can see ordered from top to bottom.

var rightSideView = function(root) {    
  if(!root) return [];
  let result = [];
  let queue = [root]; 
  let currentNode;
  
  while(queue.length){
      let queue_length = queue.length
      let count = 0;
      while(count < queue_length){
          currentNode = queue.shift()
          if(currentNode.left) queue.push(currentNode.left);
          if(currentNode.right) queue.push(currentNode.right);
          count++
      }
      result.push(currentNode.val)
  }
  return result;
};