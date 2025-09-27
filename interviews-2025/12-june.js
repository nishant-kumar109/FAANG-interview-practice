// o1    o2   o3  o4   o5   o6
// let loadsArr = [600, 300, 200, 700, 500, 500 ];

// application_servers = loadsArr.length/2;

// workers/application_servers : APS1, APS2, APS3

function assignRequestsToServers(requests) {
  requests.sort((a, b) => a - b);
  const result = [];
  let i = 0, j = requests.length - 1;

  while (i < j) {
    result.push([requests[i++], requests[j--]]);
  }

  if (i === j) {
    result.push([requests[i]]);
  }

  return result;
}

// Test Case
console.log(assignRequestsToServers([120, 240, 180, 300, 90]));
// Output: [ [90, 300], [120, 240], [180] ]

// Test Case : Even number of requests (basic)
console.log(assignRequestsToServers([10, 20, 30, 40]))
// Expected: [[10, 40], [20, 30]]

// Odd number of requests (with leftover)
console.log(assignRequestsToServers([5, 15, 25, 35, 45]))
// Expected: [[5, 45], [15, 35], [25]]

// Only one request
console.log(assignRequestsToServers([100]))
// Expected: [[100]]


// Two requests
console.log(assignRequestsToServers([20, 80]))
// Expected: [[20, 80]]

// All requests have same duration
console.log(assignRequestsToServers([50, 50, 50, 50]))
// Expected: [[50, 50], [50, 50]]

// Unordered and uneven
console.log(assignRequestsToServers([70, 10, 20, 90, 30, 60, 40]))
// Sorted: [10, 20, 30, 40, 60, 70, 90]
// Expected: [[10, 90], [20, 70], [30, 60], [40]]





