
// You are given an integer array cost where cost[i] is the cost of ith step on a staircase. 
// Once you pay the cost, you can either climb one or two steps.

// You can either start from the step with index 0, or the step with index 1.
// Return the minimum cost to reach the top of the floor.

// Input: cost = [1,100,1,1,1,100,1,1,100,1]
// Output: 6
// Explanation: Cheapest is: start on cost[0], and only step on 1s, skipping cost[3].


//  =================== top-down solution : recursive =========================================== 

const minCostClimbingStairs = (cost)=>{
  const n = cost.length;
  const dp = [];
  return Math.min(minCost(n-1, cost, dp), minCost(n-2, cost, dp));
};

const minCost = (i, cost, dp)=>{
  if(i< 0 ) return 0;
  if(i===0 || i===1) return cost[i];
  
  if(dp[i] !== undefined) return dp[i];
  dp[i] = cost[i] + Math.min(minCost(i-1, cost, dp), minCost(i-2, cost, dp));
  return dp[i]
}




//  =================== bottom-up solution : iterative =========================================== 

const minCostClimbingStairs = (cost)=>{
  const n = cost.length;
  if(n === 0) return 0;
  if(n === 1) return cost[0];
  let dp_one = cost[0];
  let dp_two = cost[1];
  
  for(let i=2; i<n; i++){
      let dp_current = cost[i] + Math.min(dp_one, dp_two);
      dp_one = dp_two;
      dp_two = dp_current;
  }
  return Math.min(dp_one, dp_two);
};

console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]));