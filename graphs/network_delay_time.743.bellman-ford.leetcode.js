
// Bellman-Ford Approach


const t = [[1, 4, 2], [1, 2, 9], [4, 2, -4], [2, 5, -3], [4, 5, 6],[3, 2, 3], [5, 3, 7], [3, 1, 5]]
var networkDelayTime = function(times, N, k) {
  const distances = new Array(N).fill(Infinity);
  
  distances[k - 1] = 0;
  for(let i = 0; i < N - 1; i++) {
    let count = 0;
    for(let j = 0; j < times.length; j++) {
      const source = times[j][0];
      const target = times[j][1];
      const weight = times[j][2];
      
      if(distances[source - 1] + weight < distances[target - 1]) {
        distances[target - 1] = distances[source - 1] + weight;
        count++;
      }
    }
    
    if(count === 0) break;
  }
  
  const ans = Math.max(...distances);
  return ans === Infinity ? -1 : ans;
};

console.log(networkDelayTime(t, 5, 1))