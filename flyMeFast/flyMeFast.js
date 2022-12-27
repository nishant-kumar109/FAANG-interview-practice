// Fly me to my destination - It's urgent!!

// Consider there are **N** airports in the world, each airport has a plane available with limited units of fuel available to fly. 
// You are initially positioned at airport **number one** and you have to reach the last airport (**N**) by hiring a **minimum** number of planes. 
// You'd need 1 unit of fuel to fly to the nearest airport from any airport. 
// You will be given an array of N numbers each representing the units of fuel available in the plane at that particular airport. 
// Print the number of planes you'd need to hire to reach the last airport. If it is not possible to reach the last airport, return -1

// Example: 
// Array = [2,1,2,3,1]
// In the given array, there are 5 airports, the plane at the starting airport has 2 units of fuel so you can hire this plane and stop at the 2nd or 3rd airport. 
// The plane at the 2nd airport has 1 unit of fuel so it can fly to the 3rd airport only. 
// The minimum number of planes required in this case is two 2 → 2→ 1. 

// Example 2:
// Array = [1,6,3,4,5,0,0,0,6]
// In the given array, there are 9 airports, the plane at the starting airport has 1 unit of fuel, so you can hire this plane and stop at the 2nd airport only. 
// The plane at the 2nd airport has 6 units of fuel, so it can fly to the 3rd, 4th, 5th, 6th, 7th, or 8th airport. 
// If we take the plane at the 5th airport, the minimum number of planes required in this case is three 1 → 6 → 5 → 6



// ================================== solution ==============================================================

const optimalAirPortFromLast = array => {
    let fuelCapacity = 1;
    let optimalAirPort = {
      index: array.length - 1,
      capacity: array[array.length - 1]
    };
    for (let i = array.length - 1; i > 0; i--) {
      let nearestAirPortCapacity = array[i - 1];
      if (nearestAirPortCapacity >= fuelCapacity) {
        optimalAirPort.capacity = nearestAirPortCapacity;
        optimalAirPort.index = i - 1;
      }
      fuelCapacity++;
    }
    return optimalAirPort;
  };
  
  function numberOfPlanes(arr) {
    const resultArr = [];
    resultArr.unshift(arr[arr.length - 1]);
    let recursiveFunc = arr => {
      if (arr.length == 0) return;
      airPort = optimalAirPortFromLast(arr);
      resultArr.unshift(airPort.capacity);
      let newArray = arr.slice(0, airPort.index);
      recursiveFunc(newArray, resultArr);
    };
    recursiveFunc(arr);
    return resultArr;
  }
  
  console.log(numberOfPlanes([2,1,2,3,1])); 
  console.log(numberOfPlanes( [1,6,3,4,5,0,0,0,6])); 