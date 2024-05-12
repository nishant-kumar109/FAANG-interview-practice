// You want to build a word cloud, an infographic where the size of a word corresponds to how often it appears in the body of text.
// To do this, you'll need data. Write code that takes a long string and builds its word cloud data in a hash map, 
// where the keys are words and the values are the number of times the words occurred.
// Think about capitalized words. For example, look at these sentences:

// "After beating the eggs, Dana read the next step:"
// "Add milk and eggs, then add flour and sugar."


// What do we want to do with "After", "Dana", and "add"? In this example, 
// your final hash map should include one "Add" or "add" with a value of 

// Make reasonable (not necessarily perfect) decisions about cases like "After" and "Dana".
// Assume the input will only contain words and standard punctuation.
// You could make a reasonable argument to use regex in your solution. 
// We won't, mainly because performance is difficult to measure and can get pretty bad.

class WordCloudData {
  constructor(inputString) { 
    this.wordsToCounts = new Map();
    this.populateWordsToCounts(inputString);
  }
  populateWordsToCounts(inputString) {
  
    let inputStringArray = inputString.split(' ')

    for (let i = 0; i < inputStringArray.length; i++) {
      let inputStringValue = 0;
      inputStringArray[i] = (inputStringArray[i][inputStringArray[i].length-1].toUpperCase() !== 
      inputStringArray[i][inputStringArray[i].length-1].toLowerCase()) ?  inputStringArray[i] : 
      inputStringArray[i].slice(0,inputStringArray[i].length-1);
     
      if (this.wordsToCounts.has(inputStringArray[i])) {
        inputStringValue = this.wordsToCounts.get(inputStringArray[i]);
        this.wordsToCounts.set(inputStringArray[i], inputStringValue+1)
      }

      else if (this.wordsToCounts.has(inputStringArray[i].toLowerCase())) {
        inputStringValue = this.wordsToCounts.get(inputStringArray[i].toLowerCase())
        this.wordsToCounts.set(inputStringArray[i].toLowerCase(), inputStringValue+1)
      }
      
      else if (this.wordsToCounts.has(inputStringArray[i].charAt(0).toUpperCase() + inputStringArray[i].slice(1))) {
        inputStringValue = this.wordsToCounts.get(inputStringArray[i].charAt(0).toUpperCase() + inputStringArray[i].slice(1))
        this.wordsToCounts.set(inputStringArray[i].charAt(0).toUpperCase() + inputStringArray[i].slice(1), inputStringValue+1)
      }
      else {
        if (inputStringArray[i] === '') {
          continue;
        } else {
          this.wordsToCounts.set(inputStringArray[i], 1)
        }
      }
    }
    return this.wordsToCounts;
  }

}



// Tests
// There are lots of valid solutions for this one. You
// might have to edit some of these tests if you made
// different design decisions in your solution.

let desc = 'simple sentence';
let actual = new WordCloudData('I like cake').wordsToCounts;
let expected = new Map([['I', 1], ['like', 1], ['cake', 1]]);
assert(isMapsEqual(actual, expected), desc);

desc = 'longer sentence';
actual = new WordCloudData('Chocolate cake for dinner and pound cake For dessert chocolate').wordsToCounts;
expected = new Map([['and', 1], ['pound', 1], ['for', 2], ['dessert', 1],
  ['Chocolate', 2], ['dinner', 1], ['cake', 2]]);
assert(isMapsEqual(actual, expected), desc);

desc = 'punctuation';
actual = new WordCloudData('Strawberry short cake? Yum!').wordsToCounts;
expected = new Map([['cake', 1], ['Strawberry', 1], ['short', 1], ['Yum', 1]]);
assert(isMapsEqual(actual, expected), desc);

desc = 'hyphenated Words';
actual = new WordCloudData('Dessert - mille-feuille cake').wordsToCounts;
expected = new Map([['cake', 1], ['Dessert', 1], ['mille-feuille', 1]]);
assert(isMapsEqual(actual, expected), desc);

desc = 'ellipses between words';
actual = new WordCloudData('Mmm...mmm...decisions...decisions').wordsToCounts;
expected = new Map([['mmm', 2], ['decisions', 2]]);
assert(isMapsEqual(actual, expected), desc);

desc = 'apostrophes';
actual = new WordCloudData("Allie's Bakery: Sasha's Cakes").wordsToCounts;
expected = new Map([['Bakery', 1], ['Cakes', 1], ["Allie's", 1], ["Sasha's", 1]]);
assert(isMapsEqual(actual, expected), desc);

function isMapsEqual(map1, map2) {
  if (map1.size !== map2.size) {
    return false;
  }
  for (let [key, val] of map1) {
    const testVal = map2.get(key);

    // In cases of an undefined value, make sure the key
    // actually exists on the object so there are no false positives
    if (testVal !== val || (testVal === undefined && !map2.has(key))) {
      return false;
    }
  }
  return true;
}

function assert(condition, desc) {
  if (condition) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL`);
  }
}
