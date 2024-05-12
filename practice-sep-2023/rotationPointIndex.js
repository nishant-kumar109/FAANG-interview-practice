const words = [
  "ptolemaic",
  "retrograde",
  "supplant",
  "undulate",
  "xenoepist",
  "zsymptote", // <-- rotates here!
  "babka",
  "banoffee",
  "engender",
  "karpatka",
  "othellolagkage"
];

//   Write a function for finding the index of the "rotation point,"
//   which is where I started working from the beginning of the dictionary.
//   This array is huge (there are lots of words I don't know) so we want to be efficient here.
//   To keep things simple, you can assume all words are lowercase.

// Find the rotation point in the vector

function findRotationPoint(words) {
  let start = 0,
    end = words.length - 1;
  let rotationIndex = Math.floor((start + end) / 2);
  let rotationPoint = words[rotationIndex];

  while (words[start] !== rotationPoint && words[end] !== rotationPoint) {
    if (words[start][0] > rotationPoint[0]) {
      end = rotationIndex;
      rotationIndex = Math.floor((start + end) / 2);
      rotationPoint = words[rotationIndex];
    } else {
      start = rotationIndex;
      rotationIndex = Math.floor((start + end) / 2);
      rotationPoint = words[rotationIndex];
    }
  }
  return rotationIndex + 1;
}

// Tests

let desc = "small array";
let actual = findRotationPoint(["cape", "cake"]);
let expected = 1;
assertEquals(actual, expected, desc);

desc = "medium array";
actual = findRotationPoint(["grape", "orange", "plum", "radish", "apple"]);
expected = 4;
assertEquals(actual, expected, desc);

desc = "large array";
actual = findRotationPoint([
  "ptolemaic",
  "retrograde",
  "supplant",
  "undulate",
  "xenoepist",
  "asymptote",
  "babka",
  "banoffee",
  "engender",
  "karpatka",
  "othellolagkage"
]);
expected = 5;
assertEquals(actual, expected, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
