
// You created a game that is more popular than Angry Birds.
// Each round, players receive a score between 0 and 100, which you use to rank them from highest to lowest. So far you're using an algorithm that sorts in 

// O(nlgn) time, but players are complaining that their rankings aren't updated fast enough. You need a faster sorting algorithm.
// Write a method that takes:
// an array of unsortedScores
// the highestPossibleScore in the game
// and returns a sorted array of scores in less than 

// O(nlgn) time.
// For example:
//  int[] unsortedScores = {37, 89, 41, 65, 91, 53};
// final int HIGHEST_POSSIBLE_SCORE = 100;

// int[] sortedScores = sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE);
// // sortedScores: [91, 89, 65, 53, 41, 37]


// CC#C++JavaJavaScriptObjective-CPHPPython 2.7Python 3.6RubySwift
// We’re defining 

// n as the number of unsortedScores because we’re expecting the number of players to keep climbing.
// And, we'll treat highestPossibleScore as a constant instead of factoring it into our big O time and space costs
// because the highest possible score isn’t going to change. Even if we do redesign the game a little, the scores will stay around the same order of magnitude.



function sortScores(unorderedScores, highestPossibleScore) {
  // Sort the scores in O(n) time
  let maxDigitCount = digitCount(highestPossibleScore);
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBucket = Array.from({length : 10}, ()=> []);
        for (let i = unorderedScores.length-1; i >= 0; i--) {
            let digit = getDigit(unorderedScores[i], k)
            digitBucket[digit].push(unorderedScores[i]);
        }
        unorderedScores = [].concat(...digitBucket)
    }
  return unorderedScores;
}

// digit at specific position
function getDigit(num, i) {
    return Math.floor(Math.abs(num)/Math.pow(10, i))%10;
}

// number of digit in a number
function digitCount(num) {
    let count = num.toString().length;
    return count;
}


// Tests

let desc = 'no scores';
let actual = sortScores([], 100);
let expected = [];
assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc);

desc = 'one score';
actual = sortScores([55], 100);
expected = [55];
assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc);

desc = 'two scores';
actual = sortScores([30, 60], 100);
expected = [60, 30];
assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc);

desc = 'many scores';
actual = sortScores([37, 89, 41, 65, 91, 53], 100);
expected = [91, 89, 65, 53, 41, 37];
assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc);

desc = 'repeated scores';
actual = sortScores([20, 10, 30, 30, 10, 20], 100);
expected = [30, 30, 20, 20, 10, 10];
assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
