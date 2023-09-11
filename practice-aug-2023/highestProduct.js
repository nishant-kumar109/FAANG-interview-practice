// Given an array of integers, find the highest product you can get from three of the integers.
// The input arrayOfInts will always have at least three integers.


// Psuedo code : 
// -> get the three greatest array element, if all the elements are positive
// -> if the elements are -ve 
//           product of two lowest -ve should be greater than product of two heighest +ve


// function highestProductOf3(arrayOfInts) {

//   if(arrayOfInts.length < 3) throw new Error('minimum three elements are required')

//   let sortedArray = arrayOfInts.sort((a,b)=> {
//     return a-b;
//   })
  
//   let highestNegativeProduct = sortedArray[0]*sortedArray[1]*sortedArray[sortedArray.length-1]
//   let highestPositiveProduct = Math.max(highestNegativeProduct,sortedArray[sortedArray.length-1]*sortedArray[sortedArray.length-2]*sortedArray[sortedArray.length-3]);

//   return highestPositiveProduct;

// }

function highestProductOf3(arrayOfInts) {
  if(arrayOfInts.length < 3) throw new Error('minimum three elements are required')
  let maxIntArray = [];
  let filteredArray = []

  for (let i = 0; i < 3; i++) {
    filteredArray = arrayOfInts.filter(item => !maxIntArray.includes(item));
    let maxInt = findMaxInt(filteredArray)
    maxIntArray.push(maxInt)
  }

  let heighestProduct = maxIntArray.reduce((a, b)=> a*b, 1)
 

  let absHighestIntArray = [0,0] 
  for (let i = 0; i < filteredArray.length; i++) {
    if (filteredArray[i] < 0) {
      if(Math.abs(filteredArray[i]) >  absHighestIntArray[0]){
        absHighestIntArray[1] = Math.abs(absHighestIntArray[0])
        absHighestIntArray[0] = Math.abs(filteredArray[i]);
      }
  
      else if (Math.abs(filteredArray[i]) >  absHighestIntArray[1]) {
        absHighestIntArray[1] = Math.abs(filteredArray[i]);
      }
      
    }
  }

  if (absHighestIntArray[1] > 0) {
    absHighestIntArray.push(maxIntArray[0])
    let heighestProductWithNegative = absHighestIntArray.reduce((a, b)=> a*b, 1);
    return Math.max(heighestProduct, heighestProductWithNegative)
  }

  return heighestProduct;
}

function findMaxInt(arrayOfInts) {
  let maxInt = arrayOfInts[0];
  for (let i = 1; i < arrayOfInts.length; i++) {
    if(arrayOfInts[i] > maxInt ) maxInt = arrayOfInts[i];
  }
  return maxInt;
}

// Tests

let desc = 'short array';
let actual = highestProductOf3([1, 2, 3, 4]);
let expected = 24;
assertEqual(actual, expected, desc);

desc = 'longer array';
actual = highestProductOf3([6, 1, 3, 5, 7, 8, 2]);
expected = 336;
assertEqual(actual, expected, desc);

desc = 'array has one negative';
actual = highestProductOf3([-5, 4, 8, 2, 3]);
expected = 96;
assertEqual(actual, expected, desc);

desc = 'array has two negatives';
actual = highestProductOf3([-10, 1, 3, 2, -10]);
expected = 300;
assertEqual(actual, expected, desc);

desc = 'array is all negatives';
actual = highestProductOf3([-5, -1, -3, -2]);
expected = -6;
assertEqual(actual, expected, desc);

desc = 'error with empty array';
const emptyArray = () => (highestProductOf3([]));
assertThrowsError(emptyArray, desc);

desc = 'error with one number';
const oneNumber = () => (highestProductOf3([1]));
assertThrowsError(oneNumber, desc);

desc = 'error with two numbers';
const twoNumber = () => (highestProductOf3([1, 1]));
assertThrowsError(twoNumber, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`)
  }
}

function assertThrowsError(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}
