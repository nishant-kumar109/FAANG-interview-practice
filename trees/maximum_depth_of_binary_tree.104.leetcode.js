
// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path 
// from the root node down to the farthest leaf node.

// Input: root = [3,9,20,null,null,15,7]
// Output: 3

// Input: root = [1,null,2]
// Output: 2

// class TreeNode {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }

//   insert(values) {
//     const queue = [this];
//     let i = 0;
//     while (queue.length > 0) {
//       let current = queue.shift();
//       for (let side of ["left", "right"]) {
//         if (!current[side]) {
//           if (values[i] !== null) {
//             current[side] = new TreeNode(values[i]);
//           }
//           i++;
//           if (i >= values.length) return this;
//         }
//         if (current[side]) queue.push(current[side]);
//       }
//     }
//     return this;
//   }
// }

// const tree = new TreeNode();
// let t1 = tree.insert([3,9,20,null,null,15,7])
// let t2 = tree.insert([1,null,2])

const maxDepth = (root, current_depth = 0)=>{
  if(!root) return current_depth;
  current_depth++;
  return Math.max(maxDepth(root.left, current_depth),maxDepth(root.right, current_depth));
  
};


// console.log(maxDepth(t1));
// console.log(maxDepth(t2));