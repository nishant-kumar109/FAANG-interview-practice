// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. 
// You are given an array prerequisites where prerequisites[i] = [ai, bi] 
// indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

// Example 2:
// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. 
// So it is impossible.

// ================================================ solution ========================================================


const p = [[1, 0], [2, 1], [2, 5], [0, 3], [4, 3], [3, 5], [4, 5]]

const canFinish = function(n, prerequisites) {
  const adjList = new Array(n).fill(0).map(() => []);
  
  for(let i = 0; i < prerequisites.length; i++) {
    const pair = prerequisites[i];
    adjList[pair[1]].push(pair[0])
  }

  for(let v = 0; v < n; v++) {
    const queue = [];
    const seen = {};
    for(let i = 0; i < adjList[v].length; i++) {
      queue.push(adjList[v][i]);
    }
    
    while(queue.length) {
      const current = queue.shift();
      seen[current] = true;

      if(current === v) return false;
      const adjacent = adjList[current];
      for(let i = 0; i < adjacent.length; i++) {
        const next = adjacent[i];
        if(!seen[next]) {
          queue.push(next);
        }
      }
    }
  }

  return true;
};

console.log(canFinish(6, p));  

