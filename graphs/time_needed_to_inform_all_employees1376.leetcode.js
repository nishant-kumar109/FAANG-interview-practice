
// Input: 
//n = 15, headID = 0, manager = [-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6], 
// informTime = [1,1,1,1,1,1,1,0,0,0,0,0,0,0,0]

//Output: 3
//Explanation: The first minute the head will inform employees 1 and 2.
//The second minute they will inform employees 3, 4, 5 and 6.
//The third minute they will inform the rest of employees.


const numOfMinutes = (n, headID, managers, informTime)=>{
  const adjList = managers.map(()=> []);
  for(let employee = 0; employee <n; employee++){
    const manager = managers[employee];
    if(manager === -1) continue;
    adjList[manager].push(employee);
  }
  return dfsTraversal(headID, adjList, informTime) 
}

const dfsTraversal = (currentEmployeeID, adjList, informTime)=>{
  if(adjList[currentEmployeeID].length === 0) return 0;
  let maxTime = 0;
  const subOrdinates = adjList[currentEmployeeID];
  for(let i=0; i<subOrdinates.length; i++){
    maxTime = Math.max(maxTime, dfsTraversal(subOrdinates[i], adjList, informTime))
  }
  return maxTime + informTime[currentEmployeeID]
}



console.log(numOfMinutes(15, 0, [-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6],[1,1,1,1,1,1,1,0,0,0,0,0,0,0,0])); 